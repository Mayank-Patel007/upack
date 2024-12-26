import './App.css';
import './quill.css'
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Services from './Components/Pages/Services';
import CreateService from "./Components/Pages/CreateService";
import EditService from './Components/Pages/EditService';
import ServiceCategory from "./Components/Pages/Servicecategory"
import CreateServiceCategory from "./Components/Pages/CreateServiceCategory"
import EditServiceCategory from "./Components/Pages/EditServiceCategory"
import News from "./Components/Pages/News";
import CreateNews from "./Components/Pages/CreateNews";
import EditNews from './Components/Pages/EditNews';
import NewsCategory from "./Components/Pages/NewsCategory"
import CreateNewsCategory from "./Components/Pages/CreateNewsCategory"
import EditNewsCategory from "./Components/Pages/EditNewsCategory"
import Testimonials from './Components/Pages/Testimonials';
import CreateTestimonials from './Components/Pages/CreateTestimonials';
import EditTestimonials from './Components/Pages/EditTestimonials';
import FAQ from "./Components/Pages/FAQ";
import CreateFAQ from "./Components/Pages/CreateFAQ";
import EditFAQ from './Components/Pages/EditFAQ';
import OurStaff from "./Components/Pages/Staff";
import CreateStaff from "./Components/Pages/CreateStaff";
import EditStaff from './Components/Pages/EditStaff';
import Banner from "./Components/Pages/Banner";
import CreateBanner from "./Components/Pages/CreateBanner";
import EditBanner from "./Components/Pages/EditBanner";
import ProductCategory from "./Components/Pages/ProductCategory";
import CreateProductCategory from "./Components/Pages/CreateCategory";
import EditCategory from "./Components/Pages/EditCategory";
import PageContent from "./Components/Pages/PageContent";
import CreatePageContent from "./Components/Pages/CreatePageContent";
import Product from "./Components/Pages/Product";
import CreateProduct from "./Components/Pages/CreateProduct";
import EditProduct from "./Components/Pages/EditProduct";
import Partner from "./Components/Pages/Partners";
import CreatePartner from "./Components/Pages/CreatePartner";
import EditPartner from "./Components/Pages/EditPartner";
import Dashboard from "./Components/Pages/Dashboard";
import Signup from "./Components/Adminsignup"
import Login from "./Components/Adminlogin";
import VerifyOTP from "./Components/VerifyOTP";
import ResetPassword from "./Components/ResetPassword";
import EditPageContent from './Components/Pages/EditPageContent';
import ForgetPassword from './Components/ForgotPassword';
import DatabaseManagement from './Components/Pages/DatabaseManagement';
import ManagePassword from "./Components/Pages/ManagePassword";
import Logo from "./Components/Pages/Logo";
import Cookies from "js-cookie";
import CreateAboutUsPoints from './Components/Pages/CreateAboutuspoints';
import EditAboutUsPoints from './Components/Pages/EditAboutuspoints';
import Achievements from "./Components/Pages/Achievements"
import CreateAchievements from "./Components/Pages/CreateAchievements"
import EditAchievement from './Components/Pages/EditAchievements';
import Counter from "./Components/Pages/Counter"
import EditCounter from "./Components/Pages/EditCounter"
import CreateCounter from "./Components/Pages/CreateCounter"
import GalleryCategory from "./Components/Pages/GalleryCategory"
import EditGalleryCategory from "./Components/Pages/EditGalleryCategory"
import CreateGalleryCategory from "./Components/Pages/CreateGalleryCategory"
import Gallery from "./Components/Pages/Gallery"
import CreateGallery from "./Components/Pages/CreateGallery"
import EditGallery from "./Components/Pages/EditGallery"
import Inquiry from "./Components/Pages/Inquiry"
import Mission from "./Components/Pages/Mission"
import Vision from "./Components/Pages/Vision"
import Corevalue from "./Components/Pages/Corevalue"
import CreateCorevalue from "./Components/Pages/CreateCorevalue"
import EditCorevalue from "./Components/Pages/EditCorevalue"
import Aboutcompany from './Components/Pages/Aboutcompany';
import Careeroption from "./Components/Pages/Careeroptions"
import CreateCareeroption from "./Components/Pages/CreateCareeroption"
import EditCareeroption from "./Components/Pages/EditCareeroption"
import Careerinquiry from "./Components/Pages/Careerinquiry"
import Footer from "./Components/Pages/Footer"
import Header from "./Components/Pages/Header"
import Globalpresence from "./Components/Pages/GlobalPresence"
import WhatsappSettings from "./Components/Pages/WhatsappSettings"
import GoogleSettings from "./Components/Pages/GoogleSettings"
import Menulisting from "./Components/Pages/Menulisting"
import CreateMenulisting from "./Components/Pages/CreateMenulisting"
import EditMenulisting from "./Components/Pages/EditMenulisting"
import Infrastructure from "./Components/Pages/Infrastructure"
import CreateInfrastructure from "./Components/Pages/CreateInfrastructure"
import EditInfrastructure from "./Components/Pages/EditInfrastructure"
import QualityControl from "./Components/Pages/QualityControl"
import CreateQualityControl from "./Components/Pages/CreateQualityControl"
import EditQualityControl from "./Components/Pages/EditQualityControl"
import Sitemap from "./Components/Pages/Sitemap"
import CreateSitemap from "./Components/Pages/CreateSitemap"
import EditSitemap from "./Components/Pages/EditSitemap"
import Metadetails from "./Components/Pages/Metadetails"
import EditMetadetails from "./Components/Pages/EditMetadetails"
import ManageProfile from "./Components/Pages/ManageProfile"
import MissionAndVision from './Components/Pages/MissionAndVision';
import Benefits from "./Components/Pages/Benefits"
import CreateBenefits from "./Components/Pages/CreateBenefits"
import EditBenefits from "./Components/Pages/EditBenefits"
import ManageColor from "./Components/Pages/ManageColor"

import UserHome from './UserPages/UserHome'
import UserMailerCategories from './UserPages/UserMailerCategories';
import UserReviewsPage from './UserPages/UserReviewsPage';
import UserProductDetailPage from './UserPages/UserProductDetail';
import UserCheckoutPage from './UserPages/UserCheckoutPage';
import UserContactUsPage from './UserPages/UserContactUsPage';
import UserFaqPage from './UserPages/UserFaqPage';
import UserReturnPage from './UserPages/UserReturnPage';
import UserPackPointsPage from './UserPages/UserPackPointsPage';
import UserShippingPage from './UserPages/UserShippingPage';
import UserPaymentOptionsPage from './UserPages/UserPaymentOptionsPage';
import UserSamplePage from './UserPages/UserSamplePage';
import AboutUpackPage from './UserPages/AboutUpackPage';
import UserTermsAndCondidtionsPage from './UserPages/UserTermsAndCondidtionsPage';
import UserPrivatePolicyPage from './UserPages/UserPrivatePolicyPage';
import MyAccountPage from './UserPages/MyAccountPage';
import UserSitemapPage from './UserPages/UserSitemapPage';
import UserBlogPage from './UserPages/UserBlogPage';
import Return from './Components/Pages/Return';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = Cookies.get('jwt');
    if (token) {
      setIsLoggedIn(true);
    } else {
      console.log("User is not logged in");
    }
  }, []);

  return (

    <BrowserRouter>
      <Routes>
        {!isLoggedIn ? (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/resetpassword" element={<ResetPassword />} />
            <Route path="/verifyOTP" element={<VerifyOTP />} />
            <Route path="/forgetpassword" element={<ForgetPassword />} />

            <Route path="/" element={<UserHome />} />
            <Route path="/mailerbox" element={<UserMailerCategories />} />
            <Route path="/userproductdetailpage" element={<UserProductDetailPage />} />
            <Route path="/userreviewspage" element={<UserReviewsPage />} />
            <Route path="/usercheckoutpage" element={<UserCheckoutPage />} />
            <Route path="/usercontactuspage" element={<UserContactUsPage />} />
            <Route path="/userfaqpage" element={<UserFaqPage />} />
            <Route path="/userreturnpage" element={<UserReturnPage />} />
            <Route path="/userpackpointspage" element={<UserPackPointsPage />} />
            <Route path="/usershippingpage" element={<UserShippingPage />} />
            <Route path="/userpaymentoptionspage" element={<UserPaymentOptionsPage />} />
            <Route path="/usersamplepage" element={<UserSamplePage />} />
            <Route path="/aboutupackpage" element={<AboutUpackPage />} />
            <Route path="/usertermsandcondidtionspage" element={<UserTermsAndCondidtionsPage />} />
            <Route path="/userprivatepolicypage" element={<UserPrivatePolicyPage />} />
            <Route path="/myaccountpage" element={<MyAccountPage />} />
            <Route path="/userblogpage" element={<UserBlogPage />} />
            <Route path="/usersitemappage" element={<UserSitemapPage />} />
            <Route path="/return" element={<Return />} />

          </>
        ) : (
          <Route path="/" element={<Sidebar />}>
            <Route index element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/createServices" element={<CreateService />} />
            <Route path="/services/editServices/:slugs" element={<EditService />} />
            <Route path="/ServiceCategory" element={<ServiceCategory />} />
            <Route path="/ServiceCategory/CreateServiceCategory" element={<CreateServiceCategory />} />
            <Route path="/ServiceCategory/editServiceCategory/:categoryId/:subCategoryId?/:subSubCategoryId?" element={<EditServiceCategory />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/createNews" element={<CreateNews />} />
            <Route path="/news/editNews/:slugs" element={<EditNews />} />
            <Route path="/NewsCategory" element={<NewsCategory />} />
            <Route path="/NewsCategory/CreateNewsCategory" element={<CreateNewsCategory />} />
            <Route path="/NewsCategory/editNewsCategory/:categoryId/:subCategoryId?/:subSubCategoryId?" element={<EditNewsCategory />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/testimonials/createTestimonials" element={<CreateTestimonials />} />
            <Route path="/testimonials/editTestimonials/:id" element={<EditTestimonials />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/faq/createFAQ" element={<CreateFAQ />} />
            <Route path="/faq/editFAQ/:id" element={<EditFAQ />} />
            <Route path="/ourTeam" element={<OurStaff />} />
            <Route path="/ourTeam/createTeam" element={<CreateStaff />} />
            <Route path="/ourTeam/editTeam/:id" element={<EditStaff />} />
            <Route path="/banner" element={<Banner />} />
            <Route path="/banner/createBanner" element={<CreateBanner />} />
            <Route path="/banner/editBanner/:id" element={<EditBanner />} />
            <Route path="/ProductCategory" element={<ProductCategory />} />
            <Route path="/ProductCategory/CreateProductCategory" element={<CreateProductCategory />} />
            <Route path="/ProductCategory/editProductCategory/:categoryId/:subCategoryId?/:subSubCategoryId?" element={<EditCategory />} />
            <Route path="/extrapages" element={<PageContent />} />
            <Route path="/extrapages/createextrapages" element={<CreatePageContent />} />
            <Route path="/extrapages/editextrapages/:id" element={<EditPageContent />} />
            <Route path="/pageContent/createPoints" element={<CreateAboutUsPoints />} />
            <Route path="/pageContent/editPoints/:id" element={<EditAboutUsPoints />} />
            <Route path="/product" element={<Product />} />
            <Route path="/product/createProduct" element={<CreateProduct />} />
            <Route path="/product/editProduct/:slugs" element={<EditProduct />} />
            <Route path="/clients" element={<Partner />} />
            <Route path="/clients/createClients" element={<CreatePartner />} />
            <Route path="/clients/editClients/:id" element={<EditPartner />} />
            <Route path="/manageLogo" element={<Logo />} />
            <Route path="/DatabaseManagement" element={<DatabaseManagement />} />
            <Route path="/managePassword" element={<ManagePassword />} />
            <Route path="/manageProfile" element={<ManageProfile />} />
            <Route path="/certificates" element={<Achievements />} />
            <Route path="/certificates/createcertificates" element={<CreateAchievements />} />
            <Route path="/certificates/editcertificates/:id" element={<EditAchievement />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/counter/editCounter/:id" element={<EditCounter />} />
            <Route path="/counter/createCounter" element={<CreateCounter />} />
            <Route path="/Inquiry" element={<Inquiry />} />
            <Route path="/GalleryCategory" element={<GalleryCategory />} />
            <Route path="/GalleryCategory/editGalleryCategory/:id" element={<EditGalleryCategory />} />
            <Route path="/GalleryCategory/CreateGalleryCategory" element={<CreateGalleryCategory />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/gallery/createGallery" element={<CreateGallery />} />
            <Route path="/gallery/EditGallery/:id" element={<EditGallery />} />
            {/* <Route path="/mission" element={<Mission />} />
            <Route path="/vision" element={<Vision />} />  */}
            <Route path="/missionandvision" element={<MissionAndVision />} />
            <Route path="/corevalue" element={<Corevalue />} />
            <Route path="/corevalue/createCorevalue" element={<CreateCorevalue />} />
            <Route path="/corevalue/editCorevalue/:id" element={<EditCorevalue />} />
            <Route path="/aboutcompany" element={<Aboutcompany />} />
            <Route path="/careeroption" element={<Careeroption />} />
            <Route path="/careeroption/createCareerOption" element={<CreateCareeroption />} />
            <Route path="/careeroption/editCareerOption/:id" element={<EditCareeroption />} />
            <Route path="/careerinquiry" element={<Careerinquiry />} />
            <Route path="/footer" element={<Footer />} />
            <Route path="/header" element={<Header />} />
            <Route path="/globalpresence" element={<Globalpresence />} />
            <Route path="/whatsappSettings" element={<WhatsappSettings />} />
            <Route path="/googleSettings" element={<GoogleSettings />} />
            <Route path="/menulisting" element={<Menulisting />} />
            <Route path="/menulisting/createMenulisting" element={<CreateMenulisting />} />
            <Route path="/menulisting/editMenulisting/:id" element={<EditMenulisting />} />
            <Route path="/infrastructure" element={<Infrastructure />} />
            <Route path="/infrastructure/createInfrastructure" element={<CreateInfrastructure />} />
            <Route path="/infrastructure/editInfrastructure/:id" element={<EditInfrastructure />} />
            <Route path="/qualitycontrol" element={<QualityControl />} />
            <Route path="/qualitycontrol/createQualitycontrol" element={<CreateQualityControl />} />
            <Route path="/qualitycontrol/editQualitycontrol/:id" element={<EditQualityControl />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="/sitemap/createSitemap" element={<CreateSitemap />} />
            <Route path="/sitemap/editSitemap/:id/:type" element={<EditSitemap />} />
            <Route path="/metadetails" element={<Metadetails />} />
            <Route path="/metadetails/editmetaDetails/:id/:type" element={<EditMetadetails />} />
            <Route path="/benefits" element={<Benefits />} />
            <Route path="/benefits/createBenefits" element={<CreateBenefits />} />
            <Route path="/benefits/editBenefits/:id" element={<EditBenefits />} />
            <Route path="/manageTheme" element={<ManageColor />} />
          </Route>

        )}
      </Routes>
    </BrowserRouter>

  );
}

export default App;
