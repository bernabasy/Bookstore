const Book = (book) => {
  const {
    title, author,
  } = book;

  return (
    <div className="m-0">
      <p className="mb-0">Fiction</p>
      <h3 className="my-0">{title}</h3>
      <p>{author}</p>
    </div>
  );
};

export default Book;
