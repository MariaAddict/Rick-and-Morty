import "./SearchBlock.css";
import { useState, useRef } from "react";

function SearchBlock({ onSubmit }) {
  const [word, setWord] = useState("");
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const inputRef = useRef();

  function handleChange(e) {
    setWord(e.target.value);
    setIsValid(e.target.closest(".seach-form").checkValidity());
    setErrors({
      ...errors,
      [inputRef.current.name]: inputRef.current.validationMessage,
    });
      onSubmit(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsValid(e.target.closest(".seach-form").checkValidity());
    setErrors({
      ...errors,
      [inputRef.current.name]: inputRef.current.validationMessage,
    });
    if (isValid) {
      onSubmit(word);
    }
  }

  return (
    <form
      className="seach-form"
      action="#"
      name="seach-form"
      onSubmit={handleSubmit}
      noValidate
    >
      <input
        type="text"
        ref={inputRef}
        value={word}
        name="search"
        className="seach-form__input"
        placeholder="Введите название серии"
        onChange={handleChange}
        minLength="1"
        required
      ></input>
      <button
        type="submit"
        className="seach-form__button"
        onChange={handleSubmit}
      >
        Искать
      </button>
      <span
        className={`seach-form__error ${
          !errors.search && isValid ? "" : "seach-form__error_visible"
        }`}
      >
        {errors.search ? "Нужно ввести название серии" : ""}
      </span>
    </form>
  );
}

export default SearchBlock;
