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

    <section className="portfolio" id="portfolio">
      <h2 className="text-4xl">Projetos</h2>
      <h3 className="text-4xl font-bold text-green-500 underline">Tailwind está funcionando</h3>

      <Carousel       opts={{
        align: "start",
      }}
      className="w-full max-w-sm">
        <CarouselContent>
          <CarouselItem className="flex-none w-full snap-start">
            <Card>
              <CardContent>
                  <div className="portfolio-box">
                    <img src="html,css,javascript.jpg" alt="portfolio 1" />
                    <div className="portfolio-layer text-4xl text-white">
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
              <CardContent>

                  <div className="portfolio-box">
                    <img src="python image.jpg" alt="portfolio 2" />
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
              <CardContent>
                <div className="portfolio-box">
                  <img src="NODE.PNG" alt="portfolio 4" />
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
              <CardContent>
                <div className="portfolio-box">
                  <img src="python-image2.jpg" alt="portfolio 3" />
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

          <CarouselItem className="flex-none w-full snap-start">
            <Card>
              <CardContent>
                <div className="portfolio-box">
                  <img src="typescript.png" alt="portfolio 8" />
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
              <CardContent>
                <div className="portfolio-box">
                  <img src="mongo.png" alt="portfolio 7" />
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
              <CardContent>
                <div className="portfolio-box">
                  <img src="react.png" alt="portfolio 6" />
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
              <CardContent>
                <div className="portfolio-box">
                  <img src="mysql.jpg" alt="portfolio 5" />
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
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
