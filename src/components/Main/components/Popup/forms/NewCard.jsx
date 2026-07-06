export default function NewCard() {
  return (
    <form className="popup__content" name="card-form" noValidate>
      <fieldset className="popup__content">
        <input
          className="popup__input"
          id="card-name"
          placeholder="Título"
          required
          type="text"
          minLength="1"
          maxLength="30"
        />
        <span className="popup__input-error" id="card-name-error"></span>

        <input
          className="popup__input"
          id="card-link"
          placeholder="Enlace a la imagen"
          required
          type="url"
        />
        <span className="popup__input-error" id="card-link-error"></span>

        <button className="popup__button popup__button_save" type="submit">
          Guardar
        </button>
      </fieldset>
    </form>
  );
}
