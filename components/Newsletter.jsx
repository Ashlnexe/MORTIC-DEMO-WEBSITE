export default function Newsletter() {
  return (
    <section className="w-full py-24 px-4 flex flex-col items-center justify-center text-center border-b border-gray-200">
      <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-4">
        Signup for our newsletter
      </h2>
      <p className="text-sm md:text-base text-gray-600 max-w-xl mb-8">
        Get early access to drops, collabs, and things we only share with the inner circle.
      </p>

      <form className="w-full max-w-md flex items-end gap-4" onSubmit={(e) => e.preventDefault()}>
        <div className="flex-1 border-b border-black pb-2">
          <input 
            type="email" 
            placeholder="E-mail" 
            className="w-full bg-transparent outline-none text-black placeholder:text-gray-500 font-medium"
            required
          />
        </div>
        <button 
          type="submit" 
          className="bg-black text-white px-6 py-2 text-sm font-bold uppercase hover:bg-gray-900 transition-colors"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
}
