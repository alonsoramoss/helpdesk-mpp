
function Login() {
  return (

    <div className=" flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-2/3 md:block hidden">
        <div className="h-full flex justify-center items-center">
          <div
            className="bg-cover bg-center h-full w-full"
            style={{
              backgroundImage: `url("placeholder.png")`,
            }}
          />
        </div>
      </div>

      <div className="w-full md:w-1/3 flex justify-center items-center h-screen">
        <div className="max-w-md w-full">
          <a href="/inicio">
            <h2 className="text-3xl font-bold text-center uppercase">Iniciar Sesión</h2>
          </a>
          <div className="p-4 rounded-md overflow-hidden shadow-md">
          </div>
        </div>
      </div>
    </div >
  )
}

export default Login
