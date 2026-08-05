
const Locations=()=>{
    return (

        
        <div className="hidden fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
  <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
    <button className="absolute right-4 top-4 text-gray-400">✕</button>
    
    <div className="mb-6 text-center">
      <h3 className="text-xl font-bold">Welcome</h3>
      <p className="text-sm text-gray-500">Select location and sign in</p>
    </div>

    {/* Pincode Check  */}
    <div className="mb-6 rounded-xl bg-gray-50 p-4 border">
      <label className="block text-xs font-semibold mb-2">Check Delivery</label>
      <div className="flex gap-2">
        <input type="text" placeholder="Enter Pincode" className="w-full rounded-lg border px-3 py-2 text-sm" />
        <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white">Apply</button>
      </div>
    </div>

    {/* Auth Options  */}
    <div className="space-y-3">
      <button className="flex w-full items-center justify-center gap-2 rounded-xl border py-2.5 text-sm">
        Google
      </button>
      <button className="flex w-full items-center justify-center rounded-xl bg-gray-900 py-2.5 text-sm text-white">
        Sign in with Email
      </button>
    </div>
   </div>
  </div>
 )
}

export default Locations;