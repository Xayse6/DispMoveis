import cv2
import numpy as np
import os
from datetime import datetime

def main():

    file_path = "origem/video.mp4"

    if file_path.lower().endswith(('.png','.jpg','.jpeg','.bmp')):

        process_image(file_path,width=120)

    elif file_path.lower().endswith(('.mp4','.avi','.mov','.mkv')):

        process_video(file_path,width=120,fps=25)

    else:

        print("Tipo de arquivo nao suportado")

def frame_to_ascii(frame, width=120):

    height, orig_w = frame.shape[:2]
    aspect_ratio = height / orig_w
    new_height = int(aspect_ratio * width * 0.55)

    resized = cv2.resize(frame, (width, new_height))
    gray = cv2.cvtColor(resized, cv2.COLOR_BGR2GRAY)

    ascii_img = []

    for row in gray:
        ascii_row = "".join(
            ASCII_CHARS[min(int(pixel / 255 * (len(ASCII_CHARS)-1)), len(ASCII_CHARS)-1)]
            for pixel in row
        )
        ascii_img.append(ascii_row)

    return ascii_img

def ascii_to_image(ascii_img, scale=10):

    h = len(ascii_img)
    w = len(ascii_img[0])

    img = np.zeros((h*scale, w*scale), dtype=np.uint8)

    for y,row in enumerate(ascii_img):
        for x,char in enumerate(row):

            intensity = int((ASCII_CHARS.index(char)/(len(ASCII_CHARS)-1))*255)

            img[
                y*scale:(y+1)*scale,
                x*scale:(x+1)*scale
            ] = intensity

    return img

def process_image(image_path, width=120):

    if not os.path.exists(OUTPUT_DIR):
        os.makedirs(OUTPUT_DIR)

    image = cv2.imread(image_path)

    if image is None:
        print("Erro ao carregar imagem")
        return

    ascii_img = frame_to_ascii(image,width)
    ascii_image = ascii_to_image(ascii_img)

    timestamp = datetime.now().strftime("%Y-%m-%d_%H-%M-%S")

    filename = os.path.basename(image_path)
    name = os.path.splitext(filename)[0]

    output_path = os.path.join(OUTPUT_DIR,f"{name}_{timestamp}.png")

    cv2.imwrite(output_path,ascii_image)

    print("Imagem ASCII salva em:",output_path)

def process_video(video_path,width=120,fps=25):

    if not os.path.exists(OUTPUT_DIR):
        os.makedirs(OUTPUT_DIR)

    cap = cv2.VideoCapture(video_path)

    if not cap.isOpened():
        print("Erro ao abrir video")
        return

    timestamp = datetime.now().strftime("%Y-%m-%d_%H-%M-%S")
    name = os.path.splitext(os.path.basename(video_path))[0]

    output_video = os.path.join(OUTPUT_DIR,f"{name}_{timestamp}.mp4")

    ret,frame = cap.read()

    if not ret:
        return

    ascii_frame = frame_to_ascii(frame,width)
    img = ascii_to_image(ascii_frame)

    h,w = img.shape

    out = cv2.VideoWriter(
        output_video,
        cv2.VideoWriter_fourcc(*'mp4v'),
        fps,
        (w,h),
        False
    )

    while ret:

        ascii_frame = frame_to_ascii(frame,width)
        img = ascii_to_image(ascii_frame)

        out.write(img)

        ret,frame = cap.read()

    cap.release()
    out.release()

    print("Video ASCII salvo em:",output_video)

ASCII_CHARS = "# @%#*+=-:."
 
OUTPUT_DIR = "saida_ascii"

if __name__ == "__main__":
    main()