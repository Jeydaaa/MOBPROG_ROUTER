import { StyleSheet } from 'react-native';

export const RegisterStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34495e',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 32,
    color: '#fbfcfc',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'monospace',
  },
  input: {
    height: 50,
    borderColor: '#85929e',
    borderWidth: 2,
    borderRadius: 10,
    color: '#FFFFFF',
    paddingHorizontal: 16,
    marginBottom: 12,
    fontSize: 16,
    fontFamily: 'monospace',
  },
  nameContainer: {
    flexDirection: 'row',  
    justifyContent: 'space-between',  
    marginBottom: 12,
  },
  halfInput: {
    height: 50,
    borderColor: '#85929e',
    borderWidth: 2,
    borderRadius: 10,
    color: '#FFFFFF',
    paddingHorizontal: 16,
    fontSize: 16,
    fontFamily: 'monospace',
    width: '48%',  
  },
  lastNameInput: {
    marginLeft: 8,  
  },
  button: {
    backgroundColor: '#5d6d7e',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fbfcfc',
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'monospace',
  },
  linkText: {
    color: '#fbfcfc',
    textAlign: 'center',
    marginTop: 10,
    fontSize: 14,
    fontFamily: 'monospace',
  },
  errorText: {
    color: '#FF0000',
    textAlign: 'center',
    marginBottom: 10,
  },
});