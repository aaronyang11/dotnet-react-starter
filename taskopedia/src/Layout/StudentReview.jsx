function StudentReview() {
  return (
    <div className="p-2">
      <i
        class="bi bi-hand-thumbs-up-fill text-success pt-1"
        style={{ cursor: "pointer" }}
      ></i>
      <i
        class="bi bi-hand-thumbs-down-fill text-danger pt-1"
        style={{ cursor: "pointer" }}
      ></i>
    </div>
  );
}

export default StudentReview;
