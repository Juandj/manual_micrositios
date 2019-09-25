# Medidas de seguridad y contingencia

1. El software cerrará cualquier sesión automáticamente en 30 minutos por inactividad, este tiempo lo puede configurar un administrador en la parametrización.

2. En la página de inicio de sesión en la parte inferior derecha la aplicación cuenta con protección de **"reCAPTCHA"** para validar que la aplicación sea manipulada por personas y no por una máquina o robots informáticos.

    ![protetion_recaptcha](../../images_folder/general/security_measures/protetion_recaptcha.png)
    
3. Otros elementos que se utilizan dentro del sistema son los mensajes o notas informativas que permiten dar a conocer al usuario sobre los datos que se deben ingresar en algunos campos. 
  
    ![informative_notes](../../images_folder/general/security_measures/informative_notes.png)

4. También dentro del sistema se utilizan validaciones que permiten notificar al usuario sobre los errores que está cometiendo al ingresar un dato en un campo. 

    ![password_validation](../../images_folder/general/security_measures/password_validation.png)

5. Cuando se trata de ingresar un dato errado en un campo el sistema no lo permite generando un mensaje de error.

    ![textfield_validation](../../images_folder/general/security_measures/textfield_validation.png)
  
6. Al diligenciar campos de un formulario, es necesario diligenciar los campos obligatorios, los cuales se identifican por tener un  **"\*"** . Los demás campos serán opcionales y se podrá completar la acción a ejecutar sin estos campos.
  
    ![mandatory_field_error](../../images_folder/general/security_measures/mandatory_fields_error.png)

7. En el momento en que se intenta eliminar un registro el sistema genera un mensaje de advertencia, dándole la oportunidad al usuario a que **Cancele** o **Confirme** la eliminación como se muestra en la imagen.

    ![warning_message](../../images_folder/general/security_measures/warning_message.png)

8. Cuando una sesión cumple el tiempo de inactividad y se quiere realizar un pago se genera un mensaje emergente donde se informa al usuario que la sesión ha expirado por tanto este debe ingresar nuevamente para poder hacer uso de la plataforma de pago.

 ![warning_sesion](../../images_folder/general/security_measures/warning_sesion.png)