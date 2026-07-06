export default function EditProfile() {
  return (
    <form className="popup__content" name="profile-form" noValidate>
      <fieldset className="popup__content">
        <input
          className="popup__input"
          id="profile-name"
          placeholder="Nombre"
          required
          type="text"
          minLength="2"
          maxLength="40"
        />
        <span className="popup__input-error" id="profile-name-error"></span>

        <input
          className="popup__input"
          id="profile-about"
          placeholder="Acerca de mí"
          required
          type="text"
          minLength="2"
          maxLength="200"
        />
        <span className="popup__input-error" id="profile-about-error"></span>

        <button className="popup__button popup__button_save" type="submit">
          Guardar
        </button>
      </fieldset>
    </form>
  );
}
