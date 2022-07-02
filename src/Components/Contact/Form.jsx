const Form = () => {
  return (
    <form>
      <input
        type="text"
        placeholder="Name *"
        className="w-full py-1 px-3 my-2 bg-primary text-black border-[3px] border-shadow border-border placeholder:text-white focus:outline-none"
      />

      <input
        type="email"
        placeholder="Email *"
        className="w-full py-1 px-3 my-2 bg-primary text-black border-[3px] border-shadow border-border placeholder:text-white focus:outline-none"
      />

      <input
        type="text"
        placeholder="Subject"
        className="w-full py-1 px-3 my-2 bg-primary text-black border-[3px] border-shadow border-border placeholder:text-white focus:outline-none"
      />

      <textarea
        type="text"
        rows="4"
        placeholder="Message"
        className="w-full py-1 px-3 my-2 bg-primary text-black border-[3px] border-shadow border-border placeholder:text-white focus:outline-none"
      />
      <div className="-mt-8">
        <button className="bg-black text-[#78aba5]  border-[3px] border-border px-12 py-2">
          Send
        </button>
      </div>
    </form>
  );
};

export default Form;
