import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const BannerSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="">
          <img
            src="https://bangladesh.gov.bd/sites/default/files/files/bangladesh.gov.bd/top_banner/26bad4db_15b3_49da_91ad_980595d0fb93/our_pride.png"
            alt=""
            className="w-full"
          />
        </div>
        <div className="w-full">
          <img
            src="https://bangladesh.gov.bd/sites/default/files/files/bangladesh.gov.bd/top_banner/efcb7ad1_7967_492c_900f_ccd23974f11f/myGov%20Static2(1)%20(1).jpeg"
            alt=""
          />
        </div>
        <div className="w-full">
          <img
            src="https://bangladesh.gov.bd/sites/default/files/files/bangladesh.gov.bd/top_banner/9ebba61b_2bf5_4157_aa8f_776d2d10bc2d/Banner-2.jpg"
            alt=""
          />
        </div>
        <div className="w-full">
          <img
            src="https://bangladesh.gov.bd/sites/default/files/files/bangladesh.gov.bd/top_banner/3671a4bc_6191_4e15_b3d5_40cc96ac2c81/banner-renew-your-passport.png"
            alt=""
            className="w-full"
          />
        </div>
      </Slider>

      {/* service section start */}

      <div className="flex justify-start gap-1 items-center font-notobangla">
        <p className="bg-[#e9e5eb] py-2 px-4 rounded-sm ">জনপ্রিয় সেবা</p>
        <p className="bg-[#9E5BBA] py-2 px-4 rounded-sm hover:bg-gray-200 duration-500">
          নতুন সেবা
        </p>
        <p className="bg-[#9E5BBA] py-2 px-4 rounded-sm hover:bg-gray-200 duration-500">
          মোবাইল সেবা
        </p>
        <p className="bg-[#9E5BBA] py-2 px-4 rounded-sm hover:bg-gray-200 duration-500">
          দপ্তর ভিত্তিক সেবা
        </p>
        <p className="bg-[#9338ba] py-2 px-4 rounded-sm hover:bg-gray-200 duration-500">
          সকল ই-সেবা
        </p>
      </div>

      {/* service items section */}

      <div className="bg-[#FAFAFA] h-[250px] border-2 border-gray-100 px-4"></div>

      {/* text section */}

      <div>
        <p className="font-notobangla mt-10 gap-4">
          <span className="text-[#9E5BBA] font-extrabold text-xl">উদ্যোগ</span>{' '}
          <br />
          জাতীয় দুর্যোগ পরিকল্পনা ২০২১-২০২৫ (১৪-০৫-২০২৩) <br />
          বাংলাদেশ সরকারের অষ্টম পঞ্চবার্ষিক পরিকল্পনা (১৪-০৫-২০২৩) <br />
          বাংলাদেশ সরকারের প্রেক্ষিত পরিকল্পনা (২০২১-২০৪১) (১৪-০৫-২০২৩) <br />
          বাজেট (২০২২-২০২৩)(১৪-০৫-২০২৩)
        </p>
        <button className="bg-gray-600 items-center px-2 text-white text-sm font-notobangla">
          সকল
        </button>
      </div>

      {/* card section */}
      <div className="flex flex-col justify-between mt-16">
        <div className="flex items-center justify-between">
          <a href="https://bangladesh.gov.bd/sites/default/files/files/bangladesh.gov.bd/popular_portal/059a8ebf_1095_4e33_9a60_83b79160fef9/forms_portal_logo%20(1).png">
            <img
              src="https://bangladesh.gov.bd/sites/default/files/files/bangladesh.gov.bd/popular_portal/059a8ebf_1095_4e33_9a60_83b79160fef9/forms_portal_logo%20(1).png"
              alt=""
            />
          </a>
          <a href="https://bangladesh.gov.bd/sites/default/files/files/bangladesh.gov.bd/popular_portal/be1be504_e545_456b_9872_970d367c4fdf/TP%20main-logo.png">
            <img
              src="https://bangladesh.gov.bd/sites/default/files/files/bangladesh.gov.bd/popular_portal/be1be504_e545_456b_9872_970d367c4fdf/TP%20main-logo.png"
              alt=""
              className="w-56"
            />
          </a>
          <a href="https://bangladesh.gov.bd/sites/default/files/files/bangladesh.gov.bd/popular_portal/88c5e4d1_7f0b_4a04_9561_114d8e1a91f0/Konnect%20Logo.png">
            <img
              src="https://bangladesh.gov.bd/sites/default/files/files/bangladesh.gov.bd/popular_portal/88c5e4d1_7f0b_4a04_9561_114d8e1a91f0/Konnect%20Logo.png"
              alt=""
              className="w-56"
            />
          </a>
        </div>
        <div className="flex items-center justify-between">
          <a href="https://bangladesh.gov.bd/sites/default/files/files/bangladesh.gov.bd/popular_portal/d45f580f_22c1_4ead_8291_8773cdfaadb5/visit-bangladesh-logo%20(1).png">
            <img
              src="https://bangladesh.gov.bd/sites/default/files/files/bangladesh.gov.bd/popular_portal/d45f580f_22c1_4ead_8291_8773cdfaadb5/visit-bangladesh-logo%20(1).png"
              alt=""
            />
          </a>
          <a href="https://bangladesh.gov.bd/sites/default/files/files/bangladesh.gov.bd/popular_portal/6d8e5647_d037_4a7b_8f63_14f19146bb8f/MP%20logo.png">
            <img
              src="https://bangladesh.gov.bd/sites/default/files/files/bangladesh.gov.bd/popular_portal/6d8e5647_d037_4a7b_8f63_14f19146bb8f/MP%20logo.png"
              alt=""
              className="w-42 h-24"
            />
          </a>
          <a href="https://bangladesh.gov.bd/sites/default/files/files/bangladesh.gov.bd/popular_portal/6e1353a3_225c_4ef3_abeb_5dc08f283ee5/logo_0_0.png">
            <img
              src="https://bangladesh.gov.bd/sites/default/files/files/bangladesh.gov.bd/popular_portal/6e1353a3_225c_4ef3_abeb_5dc08f283ee5/logo_0_0.png"
              alt=""
              className="w-56"
            />
          </a>
        </div>
        <div className="flex items-center justify-between">
          <a href="https://bangladesh.gov.bd/sites/default/files/files/bangladesh.gov.bd/popular_portal/83423c78_f11c_493b_bbdb_fdf4b64aa458/ekpay-logo.png">
            <img
              src="https://bangladesh.gov.bd/sites/default/files/files/bangladesh.gov.bd/popular_portal/83423c78_f11c_493b_bbdb_fdf4b64aa458/ekpay-logo.png"
              alt=""
              className="w-56"
            />
          </a>
          <a href="https://bangladesh.gov.bd/sites/default/files/files/bangladesh.gov.bd/popular_portal/f27d5f12_48fa_4cfd_a8ee_560ddd204120/WhatsApp%20Image%202024-02-01%20at%204.46.21%20PM.jpeg">
            <img
              src="https://bangladesh.gov.bd/sites/default/files/files/bangladesh.gov.bd/popular_portal/f27d5f12_48fa_4cfd_a8ee_560ddd204120/WhatsApp%20Image%202024-02-01%20at%204.46.21%20PM.jpeg"
              alt=""
              className="w-42 h-24"
            />
          </a>
          <a href="https://bangladesh.gov.bd/sites/default/files/files/bangladesh.gov.bd/popular_portal/851fa2a2_b5fe_46a3_8ae0_81de51a4fac1/services_portal_bn.png">
            <img
              src="https://bangladesh.gov.bd/sites/default/files/files/bangladesh.gov.bd/popular_portal/851fa2a2_b5fe_46a3_8ae0_81de51a4fac1/services_portal_bn.png"
              alt=""
              className="w-56"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BannerSlider;
