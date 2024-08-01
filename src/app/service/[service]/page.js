"use client";
import Link from "next/link";
import { servicesData } from "../ServiceCards";

const ServiceDetail = ({ params }) => {
  const { service } = params;
  const singleService = servicesData.find((s) => s.slug === service);

  if (!singleService) return <div>Service not found</div>;
  return (
    <div>
      <section className="wpo-page-title">
        <div className="container">
          <div className="row">
            <div className="col col-xs-12">
              <div className="wpo-breadcumb-wrap">
                <h2>{singleService.title}</h2>
                <ol className="wpo-breadcumb-wrap">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>{singleService.text}</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="wpo-service-details-area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12">
              {/* <div className="wpo-minimal-wrap">
                <div className="wpo-minimal-img">
                  <img
                    src={singleService.detailImage}
                    alt={singleService.text}
                  />
                </div>
              </div> */}
              <div className="wpo-p-details-section">
                <h5>{singleService.title}</h5>
                <p>{singleService.description}</p>
                <div class="process-wrap">
                  <h5>{`${singleService.text} Services`}</h5>
                </div>

                <div className="row">
                  {singleService.additionalImages?.map((image, index) => (
                    <div
                      key={index}
                      className="col-md-4 col-sm-4 col-12 mt-2 mb-2"
                    >
                      <div className="wpo-p-details-img-overlay-container">
                        <img
                          src={image}
                          alt={singleService.additionalServices[index]}
                        />
                        <div className="overlay">
                          <div className="overlay-text">
                            {singleService.additionalServices[index]}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* end wpo-faq-section */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
