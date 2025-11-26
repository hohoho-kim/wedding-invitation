const uniqueIdentifier = "JWK-WEDDING-TEMPLATE-V1";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

// 갤러리 레이아웃 타입 정의
type GalleryLayout = "scroll" | "grid";
type GalleryPosition = "middle" | "bottom";

interface GalleryConfig {
  layout: GalleryLayout;
  position: GalleryPosition;
  images: string[];
}

export const weddingConfig = {
  // 메타 정보
  meta: {
    title: "김정호 ❤️ 심민주의 결혼식에 초대합니다",
    description: "결혼식 초대장",
    ogImage: `${basePath}/images/main.jpg`,
    noIndex: true,
    _jwk_watermark_id: uniqueIdentifier,
  },

  // 메인 화면
  main: {
    title: "",
    image: `${basePath}/images/main.jpg`,
    date: "",
    venue: "",
  },

  // 소개글
  intro: {
    title: "",
    text: "서로를 바라보며 걸어온\n소중한 발걸음이\n이제 하나의 길로 이어집니다.\n\n사랑과 믿음으로\n새 가정을 이루는 저희 두 사람의\n작은 시작을 알려드립니다.",
  },

  // 결혼식 일정
  date: {
    year: 2025,
    month: 11,
    day: 1,
    hour: 12,
    minute: 0,
    displayDate: "2025.11.1 SAT PM 12:00",
  },

  // 장소 정보
  venue: {
    name: "반얀트리 클럽 앤 스파 서울 - 페스타 바이 충후",
    address:
      "서울특별시 중구 장충단로 60\n반얀트리 클럽 앤 스파 서물 - 페스타 바이 충후",
    tel: "02-2250-8170",
    naverMapId: "반얀트리 클럽 앤 스파 서울 - 페스타 바이 충후", // 페스타 바이 충후
    coordinates: {
      latitude: 37.55079,
      longitude: 127.000864,
    },
    placeId: "42957775", // 네이버 지도 장소 ID
    mapZoom: "15.00", // 지도 줌 레벨
    mapNaverCoordinates: "14141300,4507203,15,0,0,0,dh", // 네이버 지도 길찾기 URL용 좌표 파라미터 (구 형식)
    transportation: {
      subway: "3호선 동대입구역 3번 출구에서 도보 20분",
      bus: "간선\n 420\n순환\n 01A, 01B",
    },
    parking: "주차, 발렛파킹",
    // 신랑측 배차 안내
    groomShuttle: {
      location: "",
      departureTime: "",
      contact: {
        name: "",
        tel: "",
      },
    },
    // 신부측 배차 안내
    brideShuttle: {
      location: "",
      departureTime: "",
      contact: {
        name: "",
        tel: "",
      },
    },
  },

  // 갤러리
  gallery: {
    layout: "grid" as GalleryLayout, // "scroll" 또는 "grid" 선택
    position: "bottom" as GalleryPosition, // "middle" 또는 "bottom" 선택
    images: [
      `${basePath}/images/gallery/image1.jpg`,
      `${basePath}/images/gallery/image2.jpg`,
      `${basePath}/images/gallery/image3.jpg`,
      `${basePath}/images/gallery/image4.jpg`,
      `${basePath}/images/gallery/image5.jpg`,
      `${basePath}/images/gallery/image6.jpg`,
      `${basePath}/images/gallery/image7.jpg`,
      `${basePath}/images/gallery/image8.jpg`,
      `${basePath}/images/gallery/image9.jpg`,
    ],
  } as GalleryConfig,

  // 초대의 말씀
  invitation: {
    message:
      "한 줄기 별빛이 되어 만난 인연\n평생을 함께 걸어가려 합니다.\n\n소중한 분들의 축복 속에\n저희 두 사람이 첫 걸음을 내딛습니다.\n\n귀한 시간 내어 함께해 주신다면\n그 어떤 축복보다 값진 선물이 될 것입니다.",
    groom: {
      name: "김정호",
      label: "아들",
      father: "김후창",
      mother: "정이순",
    },
    bride: {
      name: "심민주",
      label: "딸",
      father: "",
      mother: "이지연",
    },
  },

  // 계좌번호
  account: {
    groom: {
      bank: "국민은행",
      number: "126301-04-121282",
      holder: "김정호",
    },
    bride: {
      bank: "우리은행",
      number: "1002-343-763953",
      holder: "심민주",
    },
    groomFather: {
      bank: "",
      number: "",
      holder: "",
    },
    groomMother: {
      bank: "",
      number: "",
      holder: "",
    },
    brideFather: {
      bank: "",
      number: "",
      holder: "",
    },
    brideMother: {
      bank: "",
      number: "",
      holder: "",
    },
  },

  // RSVP 설정
  rsvp: {
    enabled: false, // RSVP 섹션 표시 여부
    showMealOption: false, // 식사 여부 입력 옵션 표시 여부
  },

  // 슬랙 알림 설정
  slack: {
    // webhookUrl: process.env.NEXT_PUBLIC_SLACK_WEBHOOK_URL || "",
    webhookUrl: "",
    channel: "#wedding-response",
    compactMessage: true, // 슬랙 메시지를 간결하게 표시
  },
};
