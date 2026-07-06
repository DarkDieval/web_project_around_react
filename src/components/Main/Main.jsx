function Main() {
  return (
    <main className="main page__section">
      <div className="profile">
        <div className="profile__image-container">
          <img
            className="profile__image"
            src="./images/JacquesCousteau.jpg"
            alt="Foto de perfil"
          />
          <div className="profile__image-overlay">
            <button className="profile__image-edit-button" type="button">
              <span className="profile__image-edit-icon">&#9998;</span>
            </button>
          </div>
        </div>

        <div className="profile__info-container">
          <p className="profile__name">Jacques Cousteau</p>
          <p className="profile__job">Explorer</p>
          <button
            className="profile__button profile__button-edit"
            type="button"
          >
            🖋
          </button>
        </div>

        <button className="profile__button profile__button-add" type="button">
          +
        </button>
      </div>

      <section className="places">
        <ul className="places__grid"></ul>
      </section>
    </main>
  );
}

export default Main;
