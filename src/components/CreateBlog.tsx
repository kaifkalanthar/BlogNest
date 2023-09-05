const header = "";
const CreateBlog = () => {
  return (
    <div className="min-h-[100vh]">
      <div dangerouslySetInnerHTML={{ __html: header }}></div>
    </div>
  );
};

export default CreateBlog;
