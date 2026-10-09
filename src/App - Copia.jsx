import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <body class="text-center">

    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container">
            <a class="navbar-brand" href="#"></a><img src="icone instagram.jpg" alt="Bootstrap" width="30"
                height="24" />
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Dropdown
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li>
                                <hr class="dropdown-divider" />
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success" type="submit">
                        Search
                    </button>
                </form>
            </div>
        </div>
    </nav>
    <main>
        <div class="container">
            <div class="row">
                <div class="col-12 col-sm-4 p-5">
                    <img src="mulher.png" alt="Foto de perfil" class="img-fluid" />
                </div>
                <div class="col-12 col-sm-8 d-flex justify-content-evenly flex-column">
                    <div>
                        <h3>Silvia Helena</h3>
                        <p>Fullstack Developer</p>
                        
                    </div>
                    <div class="d-flex justify-content-evenly">
                        <div><span class="fw-bold">19 </span>Post</div>
                        <div><span class="fw-bold">159 </span>Seguidores</div>
                        <div><span class="fw-bold">27 </span>Seguindo</div>

                    </div>
                </div>
            </div>
            <div class="row mt-sm-0 overflow-x-scroll flex-nowrap">
                <div class="col-4 col-sm-3 col-md-2 text-center">
                    <img src="flor4.png" alt="Destaque" class="img-thumbnail rounded-circle">
                    <p class=="mt-2"> Destaque 1</p>
                </div>
                <div class="col-4 col-sm-3 col-md-2 text-center">
                    <img src="https://placehold.co/500" alt="Destaque" class="img-thumbnail rounded-circle">
                    <p class=="mt-2"> Destaque 2</p>
                </div>
                <div class="col-4 col-sm-3 col-md-2 text-center">
                    <img src="https://placehold.co/500" alt="Destaque" class="img-thumbnail rounded-circle">
                    <p class=="mt-2"> Destaque 3</p>
                </div>
                <div class="col-4 col-sm-3 col-md-2 text-center">
                    <img src="https://placehold.co/500" alt="Destaque" class="img-thumbnail rounded-circle">
                    <p class=="mt-2"> Destaque 4</p>
                </div>
                <div class="col-4 col-sm-3 col-md-2 text-center">
                    <img src="https://placehold.co/500" alt="Destaque" class="img-thumbnail rounded-circle">
                    <p class=="mt-2"> Destaque 5</p>
                </div>
                <div class="col-4 col-sm-3 col-md-2 text-center">
                    <img src="https://placehold.co/500" alt="Destaque" class="img-thumbnail rounded-circle">
                    <p class=="mt-2"> Destaque 6</p>

                </div>
                <div class="col-4 col-sm-3 col-md-2 text-center">
                    <img src="https://placehold.co/500" alt="Destaque" class="img-thumbnail rounded-circle">
                    <p class=="mt-2"> Destaque 7</p>

                </div>
                <div class="col-4 col-sm-3 col-md-2 text-center">
                    <img src="https://placehold.co/500" alt="Destaque" class="img-thumbnail rounded-circle">
                    <p class=="mt-2"> Destaque 8</p>

                </div>
                <div class="col-4 col-sm-3 col-md-2 text-center">
                    <img src="https://placehold.co/500" alt="Destaque" class="img-thumbnail rounded-circle">
                    <p class=="mt-2"> Destaque 9</p>

                </div>
                <div class="col-4 col-sm-3 col-md-2 text-center">
                    <img src="https://placehold.co/500" alt="Destaque" class="img-thumbnail rounded-circle">
                    <p class=="mt-2"> Destaque 10</p>

                </div>
            </div>
            <ul class="nav nav-pills my-3 justify-content-evenly" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                        aria-selected="true">Feed</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                        aria-selected="false">Reels</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact"
                        aria-selected="false">Marcados</button>
                </li>

            </ul>
            <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"
                    tabindex="0">
                    <div class="row gy-1 gx-1">
                        <div class="col-12 col-md-6 col-lg-3"><img src="girassol.png" alt="post"
                                class="img-fluid"></div>
                        <div class="col-12 col-md-6 col-lg-3"><img src="https://placehold.co/400" alt="post"
                                class="img-fluid"></div>
                        <div class="col-12 col-md-6 col-lg-3"><img src="https://placehold.co/400" alt="post"
                                class="img-fluid"></div>
                        <div class="col-12 col-md-6 col-lg-3"><img src="https://placehold.co/400" alt="post"
                                class="img-fluid"></div>
                        <div class="col-12 col-md-6 col-lg-3"><img src="https://placehold.co/400" alt="post"
                                class="img-fluid"></div>
                        <div class="col-12 col-md-6 col-lg-3"><img src="https://placehold.co/400" alt="post"
                                class="img-fluid"></div>
                        <div class="col-12 col-md-6 col-lg-3"><img src="https://placehold.co/400" alt="post"
                                class="img-fluid"></div>
                        <div class="col-12 col-md-6 col-lg-3"><img src="https://placehold.co/400" alt="post"
                                class="img-fluid"></div>
                        <div class="col-12 col-md-6 col-lg-3"><img src="https://placehold.co/400" alt="post"
                                class="img-fluid"></div>
                        <div class="col-12 col-md-6 col-lg-3"><img src="https://placehold.co/400" alt="post"
                                class="img-fluid"></div>
                        <div class="col-12 col-md-6 col-lg-3"><img src="https://placehold.co/400" alt="post"
                                class="img-fluid"></div>
                        <div class="col-12 col-md-6 col-lg-3"><img src="https://placehold.co/400" alt="post"
                                class="img-fluid"></div>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"
                tabindex="0">
                <div class="row gy-1 gx-1">
                    <div class="col-4"><img src="https://placehold.co/500x800" alt="post" class="img-fluid"></div>
                    <div class="col-4"><img src="https://placehold.co/500x800" alt="post" class="img-fluid"></div>
                    <div class="col-4"><img src="https://placehold.co/500x800" alt="post" class="img-fluid"></div>
                    <div class="col-4"><img src="https://placehold.co/500x800" alt="post" class="img-fluid"></div>
                    <div class="col-4"><img src="https://placehold.co/500x800" alt="post" class="img-fluid"></div>
                    <div class="col-4"><img src="https://placehold.co/500x800" alt="post" class="img-fluid"></div>
                    <div class="col-4"><img src="https://placehold.co/500x800" alt="post" class="img-fluid"></div>
                    <div class="col-4"><img src="https://placehold.co/500x800" alt="post" class="img-fluid"></div>
                    <div class="col-4"><img src="https://placehold.co/500x800" alt="post" class="img-fluid"></div>
                    <div class="col-4"><img src="https://placehold.co/500x800" alt="post" class="img-fluid"></div>
                    <div class="col-4"><img src="https://placehold.co/500x800" alt="post" class="img-fluid"></div>
                    <div class="col-4"><img src="https://placehold.co/500x800" alt="post" class="img-fluid"></div>
                </div>
                <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab"
                    tabindex="0">
                </div>

            </div>

    </main>
    <footer>
        <!-- place footer here -->
    </footer>
    <!-- Bootstrap JavaScript Bundle (includes Popper) -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI"
        crossorigin="anonymous"></script>
</body>
    </>
  )
}

export default App
