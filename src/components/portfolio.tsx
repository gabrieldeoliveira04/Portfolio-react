import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import '../app/globals.css'


export default function Portfolio() {
  return (

    <section className="portfolio w-full overflow-x-hidden px-4 " id="portfolio">
      <h2 className="text-4xl">Projetos</h2>

      <Carousel opts={{
        align: "start",
      }}
        className="mx-auto w-full">
        <CarouselContent>
          <CarouselItem className="flex-none w-full snap-start">
            <Card>
              <CardContent className="p-0">
                <div className="portfolio-box w-full h-64 relative">
                  <img src="htmlcssjavascript.jpg" className="object-cover rounded-lg shadow-lg" alt="portfolio 1" />
                  <div className="portfolio-layer text-white">
                    <h4>Desenvolvimento Web</h4>
                    <p>HTML, CSS E Javascript.</p>
                    <a href="https://github.com/stars/gabrieldeoliveira04/lists/desenvolvimento-web">
                      <i className="bx bx-link-external"></i>
                    </a>
                  </div>
                </div>

              </CardContent>
            </Card>
          </CarouselItem>

                    <CarouselItem className="flex-none w-full snap-start">
            <Card>
              <CardContent className="p-0">
                <div className="portfolio-box w-full h-64 relative">
                  <img src="C.png" className="object-cover rounded-lg shadow-lg" alt="portfolio 1" />
                  <div className="portfolio-layer text-white">
                    <h4>C#</h4>
                    <p>Projetos em C#</p>
                    <a href="https://github.com/stars/gabrieldeoliveira04/lists/c">
                      <i className="bx bx-link-external"></i>
                    </a>
                  </div>
                </div>

              </CardContent>
            </Card>
          </CarouselItem>

          <CarouselItem className="flex-none w-full snap-start">
            <Card>
              <CardContent className="p-0">

                <div className="portfolio-box w-full h-64 relative">
                  <img src="auto-python.jpg" className="w-full h-full object-cover rounded-lg shadow-lg" alt="portfolio 2" />
                  <div className="portfolio-layer">
                    <h4>Automação em Python</h4>
                    <p>Projetos de automação.</p>
                    <a href="https://github.com/stars/gabrieldeoliveira04/lists/automações-python">
                      <i className="bx bx-link-external"></i>
                    </a>
                  </div>
                </div>

              </CardContent>
            </Card>
          </CarouselItem>

          <CarouselItem className="flex-none w-full snap-start">
            <Card>
              <CardContent className="p-0">
                <div className="portfolio-box w-full h-64 relative">
                  <img src="NODE.png" className="w-full h-full object-cover rounded-lg shadow-lg" alt="portfolio 4" />
                  <div className="portfolio-layer">
                    <h4>Node</h4>
                    <p>Projetos utilizando Node.</p>
                    <a href="https://github.com/stars/gabrieldeoliveira04/lists/node">
                      <i className="bx bx-link-external"></i>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem className="flex-none w-full snap-start">
            <Card>
              <CardContent className="p-0">
                <div className="portfolio-box w-full h-64 relative">
                  <img src="python-image2.jpg" className="w-full h-full object-cover rounded-lg shadow-lg" alt="portfolio 3" />
                  <div className="portfolio-layer">
                    <h4>Interfaces em Python</h4>
                    <p>Projetos de interfaces.</p>
                    <a href="https://github.com/stars/gabrieldeoliveira04/lists/interfaces-em-python">
                      <i className="bx bx-link-external"></i>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>

          <CarouselItem className="md:hidden flex-none w-full snap-start lg:hidden">
            <Card>
              <CardContent className="p-0">
                <div className="portfolio-box w-full h-64 relative">
                  <img src="typescript.webp" className="w-full h-full object-cover rounded-lg shadow-lg" alt="portfolio 8" />
                  <div className="portfolio-layer">
                    <h4>Typescript</h4>
                    <p>Projetos utilizando Typescript.</p>
                    <a href="https://github.com/stars/gabrieldeoliveira04/lists/typescript">
                      <i className="bx bx-link-external"></i>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem className="hidden md:block flex-none w-full snap-start">
            <Card>
              <CardContent className="p-0">
                <div className="portfolio-box w-full h-64 relative">
                  <img src="typescript.webp" className="w-full h-full object-cover rounded-lg shadow-lg" alt="portfolio 8" />
                  <div className="portfolio-layer">
                    <h4>Typescript</h4>
                    <p>Projetos utilizando Typescript.</p>
                    <a href="https://github.com/stars/gabrieldeoliveira04/lists/typescript">
                      <i className="bx bx-link-external"></i>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem className="flex-none w-full snap-start">
            <Card>
              <CardContent className="p-0">
                <div className="portfolio-box w-full h-64 relative">
                  <img src="mongodb.png" className="w-full h-full object-cover rounded-lg shadow-lg" alt="portfolio 7" />
                  <div className="portfolio-layer">
                    <h4>MongoDB</h4>
                    <p>Projetos utilizando MongoDB.</p>
                    <a href="https://github.com/stars/gabrieldeoliveira04/lists/mongodb">
                      <i className="bx bx-link-external"></i>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>

          <CarouselItem className="flex-none w-full snap-start">
            <Card>
              <CardContent className="p-0">
                <div className="portfolio-box w-full h-64 relative">
                  <img src="react.webp" className="w-full h-full object-cover rounded-lg shadow-lg" alt="portfolio 6" />
                  <div className="portfolio-layer">
                    <h4>React</h4>
                    <p>Projetos utilizando React.</p>
                    <a href="https://github.com/stars/gabrieldeoliveira04/lists/react">
                      <i className="bx bx-link-external"></i>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem className="flex-none w-full snap-start">
            <Card>
              <CardContent className="p-0">
                <div className="portfolio-box w-full h-64 relative">
                  <img src="mysql.jpg" className="w-full h-full object-cover rounded-lg shadow-lg" alt="portfolio 5" />
                  <div className="portfolio-layer">
                    <h4>MySQL</h4>
                    <p>Projetos utilizando MySQL.</p>
                    <a href="https://github.com/stars/gabrieldeoliveira04/lists/mysql">
                      <i className="bx bx-link-external"></i>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        </CarouselContent>
                <CarouselPrevious className=" md:flex absolute top-1/2 -translate-y-1/2 left-0 -translate-x-1/2 z-20 dark:bg-gray-800 shadow-lg rounded-full h-10 w-10 m-5" />
                <CarouselNext className="md:flex absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/2 z-20 dark:bg-gray-800 shadow-lg rounded-full h-10 w-10 m-5" />
      </Carousel>
    </section>
  );
}
