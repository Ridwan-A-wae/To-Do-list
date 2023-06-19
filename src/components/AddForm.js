import "./AddForm.css";
export default function AddForm(props) {
  const { title, setTitle, saveTask, editId } = props;
  return (
    <div >
      <h2>วันนี้คุณอยากทำอะไร..?</h2>
      <form style={{width:"100%"}}  onSubmit={saveTask}>
        <div >
          <input style={{ marginLeft: "2rem" ,width:"100%",fontSize:"20px" }} type="text" name="text" class="input" value={title} onChange={(e) => setTitle(e.target.value)} />
          <button class="cta">
            <span>{editId ? "อัพเดต" : "เพิ่ม"}</span>
            <svg viewBox="0 0 13 10" height="10px" width="15px">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </button>
        </div>
      </form>
    </div>  
  );
}
{/* <button type="submit" className="submit-btn">
            {editId ? "อัพเดต" : "เพิ่ม"}
          </button> */}




