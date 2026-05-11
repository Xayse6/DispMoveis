@echo off
title Remocao de credencial GitHub

echo =====================================
echo  Removendo credenciais do GitHub...
echo =====================================
echo.

cmdkey /delete:git:https://github.com

echo.
echo Operacao concluida.
echo Se aparecer "Sistema especificado nao encontrado", a credencial ja nao existe.
echo.
echo Pressione qualquer tecla para sair...
pause >nul