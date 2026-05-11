import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },

  scrollContent: {
    padding: 20,
    backgroundColor: '#E5BF3C',
    minHeight: '100%',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 25,
    textAlign: 'center',
  },

  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222',
    marginBottom: 6,
    marginTop: 12,
  },

  input: {
    width: '100%',
    backgroundColor: '#FFF',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#CCC',
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#27ae60',
    paddingVertical: 14,
    borderRadius: 8,
    marginTop: 25,
    elevation: 3,
  },

  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
    letterSpacing: 0.5,
  },
});

export default styles;