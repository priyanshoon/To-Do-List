const Welcome = () => {
  return (
    <>
      <div id="carouselExampleControls" class="my-3 carousel" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src="https://media1.tenor.com/m/mWn3koFaVpoAAAAC/loud-house-loud-house-gifs.gif" alt="First slide" />
          </div>
        </div>
      </div>
      <h1 className="my-4 text-center"> Welcome to The Khandu List </h1>
      <p className="text-center my-4" style={{ fontSize: 18 }}>Khandu List is a cutting-edge to-do list application designed to simplify your task management and boost your productivity. Whether you're juggling personal errands, professional projects, or collaborative tasks, Khandu List offers an intuitive and efficient way to stay organized and on top of your responsibilities.</p>
      <h2> Why Khandu List? </h2>
      <p className="text-left my-4" style={{ fontSize: 18 }}>
        Khandu List is designed with flexibility and functionality in mind. Whether you're a busy professional, a student managing coursework, or someone looking to streamline daily chores, Khandu List adapts to your workflow and helps you achieve your goals with minimal hassle.
        Experience the power of organized task management with Khandu List and take control of your productivity today!
      </p>
    </>
  )
}

export default Welcome;
