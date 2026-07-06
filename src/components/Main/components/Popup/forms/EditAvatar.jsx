export default function EditAvatar() {
  return (
    <form className="popup__content" name="avatar-form" noValidate>
      <fieldset className="popup__content">
        <input
          className="popup__input popup__input-avatar"
          id="avatar-link"
          placeholder="Enlace a la imagen de perfil"
          required
          type="url"
        />
        <span className="popup__input-error" id="avatar-link-error"></span>

        <button className="popup__button popup__button_save" type="submit">
          Guardar
        </button>
      </fieldset>
    </form>
  );
}
