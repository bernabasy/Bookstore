const Book = (book) => {
  const {
    title, author,
  } = book;

  return (
    <div>
      <h2>{title}</h2>
      <p>{author}</p>
    </div>
  );
};

export default Book;
