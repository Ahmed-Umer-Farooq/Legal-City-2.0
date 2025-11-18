import React, { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import api from '../utils/api';
import { useAuth } from '../context/AuthContext';

// Sample lawyer data
const sampleLawyers = [
  {
    id: 1,
    name: "Darlene Robertson",
    location: "1 Station Road, London E17 8AA",
    rating: 5,
    reviewCount: 15,
    reviewScore: 10.0,
    yearsLicensed: 12,
    practiceAreas: ["Business", "Libel & Slander"],
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniamconsequat sunt nostrud amet.",
    imageUrl: "https://api.builder.io/api/v1/image/assets/TEMP/2c1f45f0ac91f9fe81539c1d2c023ddad9fd6e65?width=200",
    category: "Business",
  },
  {
    id: 2,
    name: "Devon Lane",
    location: "1 Station Road, London E17 8AA",
    rating: 5,
    reviewCount: 15,
    reviewScore: 10.0,
    yearsLicensed: 12,
    practiceAreas: ["Business", "Libel & Slander"],
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniamconsequat sunt nostrud amet.",
    imageUrl: "https://api.builder.io/api/v1/image/assets/TEMP/3d658576d4c8b59e3e68d0db8291daa35c59c295?width=200",
    category: "Business",
  },
  {
    id: 3,
    name: "Leslie Alexander",
    location: "1 Station Road, London E17 8AA",
    rating: 5,
    reviewCount: 15,
    reviewScore: 10.0,
    yearsLicensed: 12,
    practiceAreas: ["Business", "Libel & Slander"],
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniamconsequat sunt nostrud amet.",
    imageUrl: "https://api.builder.io/api/v1/image/assets/TEMP/126e4ac44d850304860f52b5fe05bdc9a59f8ec6?width=200",
    category: "Business",
  },
  {
    id: 4,
    name: "Brooklyn Simmons",
    location: "1 Station Road, London E17 8AA",
    rating: 5,
    reviewCount: 15,
    reviewScore: 10.0,
    yearsLicensed: 12,
    practiceAreas: ["Business", "Libel & Slander"],
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniamconsequat sunt nostrud amet.",
    imageUrl: "https://api.builder.io/api/v1/image/assets/TEMP/3449fc7a6ddaa658bdac5de239f849e319482913?width=200",
    category: "Business",
  },
];

function Header() {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <header className="w-full h-16 bg-gradient-to-b from-blue-600 to-cyan-400 flex items-center justify-between px-4 lg:px-36">
      <div className="flex items-center flex-shrink-0">
        <svg
          className="w-24 h-6 md:w-32 md:h-7 cursor-pointer"
          width="126"
          height="29"
          viewBox="0 0 126 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => navigate('/')}
        >
          <path
            d="M3.42081 14.5C3.42081 10.4744 5.2689 6.83289 8.25537 4.20676C11.2078 1.60532 15.273 0 19.7584 0H66.2189C75.2408 0 82.5565 6.49262 82.5565 14.5C82.5565 22.5074 75.2408 29 66.2189 29H19.7584C16.1644 29 12.8401 27.9655 10.1432 26.2202C7.71882 26.4068 7.66205 26.9529 0 29C4.10781 23.3416 3.42081 22.9711 3.42081 14.5Z"
            fill="white"
          />
          <path
            d="M85.3018 13.5722C85.3018 8.79467 89.0206 5.57031 93.8438 5.57031C97.347 5.57031 99.3881 7.40339 100.515 9.35173L97.5883 10.743C96.9155 9.49168 95.4762 8.49281 93.8438 8.49281C90.917 8.49281 88.8049 10.6497 88.8049 13.5722C88.8049 16.4947 90.917 18.6516 93.8438 18.6516C95.4762 18.6516 96.9155 17.6527 97.5883 16.4014L100.515 17.7707C99.3881 19.6971 97.347 21.5741 93.8438 21.5741C89.0206 21.5741 85.3018 18.3278 85.3018 13.5722Z"
            fill="white"
          />
          <path
            d="M101.597 7.12259C101.597 6.14843 102.411 5.38281 103.397 5.38281C104.404 5.38281 105.219 6.14843 105.219 7.12259C105.219 8.09676 104.404 8.88433 103.397 8.88433C102.411 8.88433 101.597 8.09676 101.597 7.12259ZM101.883 21.296V10.0917H104.932V21.296H101.883Z"
            fill="white"
          />
          <path
            d="M107.978 18.4907V12.6677H106.059V10.0937H107.978V7.03125H111.027V10.0937H113.377V12.6677H111.027V17.7004C111.027 18.4194 111.41 18.9518 112.083 18.9518C112.537 18.9518 112.971 18.7899 113.139 18.6033L113.786 20.8534C113.332 21.2486 112.514 21.5724 111.242 21.5724C109.108 21.5752 107.978 20.5077 107.978 18.4907Z"
            fill="white"
          />
          <path
            d="M114.913 23.0339C115.177 23.1492 115.586 23.2205 115.873 23.2205C116.665 23.2205 117.193 23.012 117.479 22.4083L117.911 21.4341L113.207 10.0898H116.472L119.495 17.8832L122.544 10.0898H125.809L120.361 23.1272C119.498 25.2375 117.962 25.7945 115.969 25.8412C115.634 25.8412 114.842 25.7726 114.482 25.6546L114.913 23.0339Z"
            fill="white"
          />
          <path
            d="M16.4023 21.1047V5.92969H19.7664V18.2618H26.4036V21.1047H16.4023Z"
            fill="#0078C0"
          />
          <path
            d="M27.0176 15.5982C27.0176 12.415 29.4647 9.84375 32.9025 9.84375C36.3148 9.84375 38.5972 12.2997 38.5972 15.8726V16.5559H30.1488C30.3617 17.8978 31.4916 19.0119 33.4192 19.0119C34.3844 19.0119 35.7016 18.625 36.4312 17.9417L37.7711 19.8516C36.6413 20.8532 34.8528 21.3773 33.087 21.3773C29.6293 21.3773 27.0176 19.1244 27.0176 15.5982ZM32.9025 12.2092C31.0431 12.2092 30.2425 13.4605 30.1261 14.5527H35.7272C35.6306 13.5072 34.8783 12.2092 32.9025 12.2092Z"
            fill="#0078C0"
          />
          <path
            d="M39.9393 23.9278L41.2792 21.856C42.1962 22.8109 43.4225 23.1979 44.8334 23.1979C46.2699 23.1979 47.9874 22.6051 47.9874 20.3769V19.3094C47.0932 20.4016 45.8696 21.0163 44.4587 21.0163C41.6341 21.0163 39.4453 19.1036 39.4453 15.4429C39.4453 11.8481 41.5858 9.84766 44.4587 9.84766C45.8242 9.84766 47.0705 10.3937 47.9874 11.5326V10.1221H50.9767V20.3824C50.9767 24.5452 47.6354 25.5688 44.8334 25.5688C42.903 25.566 41.3729 25.1325 39.9393 23.9278ZM47.9874 17.2157V13.6428C47.4707 12.9376 46.3863 12.4134 45.4211 12.4134C43.7036 12.4134 42.5255 13.5495 42.5255 15.4375C42.5255 17.3254 43.7007 18.4642 45.4211 18.4642C46.3863 18.467 47.4679 17.9209 47.9874 17.2157Z"
            fill="#0078C0"
          />
          <path
            d="M60.1779 21.1045V19.9437C59.4001 20.8548 58.0602 21.3762 56.5783 21.3762C54.7671 21.3762 52.6465 20.1935 52.6465 17.7347C52.6465 15.1415 54.7643 14.1866 56.5783 14.1866C58.1084 14.1866 59.4256 14.664 60.1779 15.5284V14.1399C60.1779 13.0258 59.19 12.2986 57.6826 12.2986C56.4818 12.2986 55.3519 12.7541 54.4122 13.5938L53.2341 11.5686C54.6223 10.364 56.4108 9.83984 58.1993 9.83984C60.811 9.83984 63.19 10.8415 63.19 14.0027V21.1018H60.1779V21.1045ZM60.1779 18.4647V17.1008C59.684 16.4642 58.7415 16.1239 57.7763 16.1239C56.5982 16.1239 55.633 16.7386 55.633 17.7841C55.633 18.8296 56.5982 19.4224 57.7763 19.4224C58.7443 19.4196 59.684 19.1013 60.1779 18.4647Z"
            fill="#0078C0"
          />
        </svg>
      </div>

      <div className="flex items-center gap-3">
        {/* Admin Panel - Only show for admin users */}
        {user && (user.role === 'admin' || user.is_admin) && (
          <button 
            onClick={() => navigate('/admin-dashboard')}
            className="text-white hover:opacity-90 transition-opacity text-sm"
          >
            Admin Panel
          </button>
        )}

        {user ? (
          <button 
            onClick={() => {
              localStorage.removeItem('token');
              window.location.href = '/';
            }}
            className="flex items-center justify-center h-9 px-4 md:px-7 rounded-full bg-white text-black text-sm font-normal hover:bg-gray-100 transition-colors"
          >
            Logout
          </button>
        ) : (
          <>
            <button 
              onClick={() => navigate('/login')}
              className="text-white hover:opacity-90 transition-opacity text-sm"
            >
              Login
            </button>

            <button 
              onClick={() => navigate('/register')}
              className="flex items-center justify-center h-9 px-4 md:px-7 rounded-full bg-white text-black text-sm font-normal hover:bg-gray-100 transition-colors"
            >
              Signup
            </button>
          </>
        )}
      </div>
    </header>
  );
}

function LawyerCard({
  id,
  name,
  location,
  rating,
  reviewCount,
  reviewScore,
  yearsLicensed,
  practiceAreas,
  description,
  imageUrl,
  category,
}) {
  const navigate = useNavigate();

  const handleViewProfile = () => {
    navigate(`/lawyer/${id}`);
  };

  return (
    <div className="w-full">
      <div className="gradient-text font-semibold text-base mb-2">
        {category}
      </div>
      <div 
        className="bg-gray-200/20 p-6 min-h-64 cursor-pointer hover:bg-gray-200/30 transition-colors duration-200"
        onClick={handleViewProfile}
      >
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-2">
          <img
            src={imageUrl}
            alt={name}
            className="w-full sm:w-24 h-48 sm:h-32 object-cover flex-shrink-0"
          />

          <div className="flex-1 sm:pl-2">
            <h3 className="text-2xl font-semibold gradient-text leading-7 hover:opacity-80 transition-opacity">
              {name}
            </h3>

            <div className="mt-1">
              <p className="text-sm font-medium uppercase tracking-widest text-gray-600 leading-4">
                Location
              </p>
              <div className="flex items-start gap-2 mt-0.5">
                <svg
                  className="w-2 h-3 text-gray-600 mt-1 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <p className="text-xs text-gray-600 leading-3">{location}</p>
              </div>
            </div>

            <div className="flex gap-1 mt-2">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5"
                  viewBox="0 0 20 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.63L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27Z"
                    fill="#FDCF00"
                  />
                </svg>
              ))}
            </div>

            <div className="mt-1">
              <p className="text-sm text-black leading-4">
                {reviewCount} Legal Reviews {reviewScore}
              </p>
              <p className="text-xs text-gray-600 mt-1 leading-3">
                Licensed for {yearsLicensed} years
              </p>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <p className="text-sm font-medium uppercase tracking-widest text-gray-600 leading-4">
            Practice Areas
          </p>
          <p className="text-sm text-black mt-1 leading-4">{practiceAreas.join(", ")}</p>
        </div>

        <div className="mt-4 flex justify-between items-start">
          <p className="text-xs text-gray-600 leading-4 flex-1 mr-4">
            {description}
          </p>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              handleViewProfile();
            }}
            className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-400 text-white text-sm rounded-lg hover:opacity-90 transition-opacity flex-shrink-0"
          >
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
}

function ChevronDown({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 9L12 15L18 9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LawyerDirectory() {
  const [lawyers, setLawyers] = useState(sampleLawyers);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchLawyers();
  }, []);

  const fetchLawyers = async () => {
    setLoading(true);
    try {
      const response = await api.get('/lawyers');
      setLawyers(response.data);
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to load lawyers');
      // Fallback to sample data if API fails
      setLawyers(sampleLawyers);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="relative w-full h-70 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/a6d5caf31a055d5031a22064e43af9838d8c0b72?width=2880"
            alt=""
            className="w-full h-240 object-cover -translate-y-120"
          />
        </div>
        <div className="absolute inset-0 bg-gray-600/20"></div>
        <svg
          className="absolute top-0 left-1/2 -translate-x-1/2 w-160 h-70 fill-gray-600/20"
          width="645"
          height="280"
          viewBox="0 0 645 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M525.5 0H4C6.4 2 8.33333 6.16667 9 8C13 16.8 5.66667 24.6667 1.5 27.5V29.5C3.9 32.3 1.5 37 0 39V41.5L2.5 44.5H15C24.6 47.7 24.6667 54.8333 23.5 58H26.5L48.5 124.5L46.5 126.5C48.9 128.5 50.1667 132.333 50.5 134C52.9 140.8 41.8333 147.5 36 150L36.5 151C37.7 150.6 38 151.167 38 151.5C37.6 154.3 39.5 156 40.5 156.5C45.3 156.5 48.1667 161.5 49 164C59.8 162.8 65.1667 172.167 66.5 177C69.7 188.2 63.5 194.667 60 196.5C61.2 200.9 60.1667 204 59.5 205C135.9 201 171.667 221 180 231.5C210 246 220 267 224.5 279.5H644.5V201C607.7 167.4 629.167 105.667 644.5 79L525.5 0Z"
            fill="#5A5A5A"
            fillOpacity="0.2"
          />
        </svg>

        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center hero-title font-semibold uppercase px-4">
          Lawyer
          <br />
          Directory
        </h1>
      </div>

      {/* Main Content */}
      <div className="max-w-screen-xl mx-auto px-4 lg:px-36 py-6">
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-10">
          <button className="h-10 px-4 rounded-lg border border-gray-600 flex items-center gap-2 hover:bg-gray-50 transition-colors">
            <svg
              className="w-5 h-5 stroke-gray-600"
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.61816 10.5156L7.51172 10.3799L7.51074 10.3789C7.51024 10.3783 7.50973 10.3772 7.50879 10.376C7.50664 10.3732 7.50327 10.3687 7.49902 10.3633C7.49052 10.3524 7.47753 10.3357 7.46094 10.3145C7.42778 10.272 7.37927 10.2094 7.31641 10.1289C7.18995 9.96708 7.00584 9.73252 6.77832 9.44141C6.32313 8.85899 5.69081 8.05021 4.9834 7.14551L0.646484 1.60352C0.298688 1.15354 0.6152 0.5 1.19629 0.5H17.8037C18.3848 0.5 18.7013 1.15354 18.3535 1.60352C17.1472 3.14178 15.4342 5.3362 14.0225 7.14551C13.3165 8.05026 12.6856 8.85894 12.2314 9.44141C12.0045 9.73248 11.8215 9.96703 11.6953 10.1289C11.6322 10.2098 11.5829 10.2729 11.5498 10.3154C11.5335 10.3363 11.5212 10.3524 11.5127 10.3633C11.5085 10.3686 11.5051 10.3732 11.5029 10.376C11.5019 10.3774 11.5005 10.3782 11.5 10.3789V10.3799L11.3936 10.5156V17.8125C11.3936 18.1868 11.0832 18.4999 10.7002 18.5H8.31152C7.92863 18.4997 7.61816 18.1868 7.61816 17.8125V10.5156Z"
                stroke="#5A5A5A"
              />
            </svg>
            <span className="text-xs text-gray-600">All Filters</span>
          </button>

          <button className="h-10 px-4 rounded-lg border border-gray-600 flex items-center gap-2 hover:bg-gray-50 transition-colors">
            <span className="text-xs text-gray-600">Years Licensed</span>
            <ChevronDown className="w-3 h-3 text-gray-600" />
          </button>

          <button className="h-10 px-4 rounded-lg border border-gray-600 flex items-center gap-2 hover:bg-gray-50 transition-colors">
            <span className="text-xs text-gray-600">Practice Area</span>
            <ChevronDown className="w-3 h-3 text-gray-600" />
          </button>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-600">Loading lawyers...</p>
          </div>
        ) : (
          /* Lawyer Cards */
          <div className="space-y-6">
            {lawyers.map((lawyer) => (
              <LawyerCard key={lawyer.id} {...lawyer} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default LawyerDirectory;