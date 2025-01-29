import React from 'react';

const ClientLogos = () => {
  return (
    <section className="client-logo-area client-logo-one bg-black py-24">
      {/* Section Title */}
      <div className="section-title-two text-white">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <span className="block text-3xl font-semibold">Our Trusted Partners</span>
              <div className="content mt-4">
                <p className="text-lg mx-auto max-w-3xl">
                  At Web Atlantis, we believe in building lasting relationships. These amazing clients have trusted us
                  to deliver exceptional web solutions, and we’re proud of the partnerships we’ve formed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Client Logos */}
      <div className="container mt-12">
        <div className="flex flex-wrap justify-center gap-12">
          <div className="single-client text-center">
            <img
              src="https://cdn.ayroui.com/1.0/images/client-logo/graygrids.svg"
              alt="GrayGrids Logo"
              className="max-w-[150px] h-auto mx-auto"
            />
          </div>
          <div className="single-client text-center">
            <img
              src="https://cdn.ayroui.com/1.0/images/client-logo/uideck.svg"
              alt="UIDeck Logo"
              className="max-w-[150px] h-auto mx-auto"
            />
          </div>
          <div className="single-client text-center">
            <img
              src="https://cdn.ayroui.com/1.0/images/client-logo/ayroui.svg"
              alt="Ayroui Logo"
              className="max-w-[150px] h-auto mx-auto"
            />
          </div>
          <div className="single-client text-center">
            <img
              src="https://cdn.ayroui.com/1.0/images/client-logo/lineicons.svg"
              alt="LineIcons Logo"
              className="max-w-[150px] h-auto mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
