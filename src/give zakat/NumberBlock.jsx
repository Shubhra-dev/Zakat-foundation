function NumberBlock({ num, onclick }) {
  return (
    <h2
      onClick={onclick}
      className="cursor-pointer text-light sm:text-paragraph font-semibold text-center w-1/4 bg-accentRed px-3 py-2 rounded-md text-primary"
    >
      ৳ {num}
    </h2>
  );
}

export default NumberBlock;
