const Backend = () => {
  return (
    <div className="container-fixed">
      <div className="flex flex-col">
        <div className="bg-slate-900 h-24">
          <div className="flex mx-40 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-gray-200 ml-6 my-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <h1 className="text-gray-200 px-10  my-auto py-10 text-2xl">Contact</h1>
          </div>
        </div>
        <div className="flex flex-col bg-gray-50 h-auto">
            <div  className="flex w-auto h-46">
                <img src="mbac.jpg" alt="me"/>
            </div>
            <div className="flex flex-col bg-gray-50 border border-b-gray-200 w-auto h-98" ></div>
        </div>
      </div>
    </div>
  );
};
export default Backend;
