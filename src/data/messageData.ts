export const messageData = [
  {
    id: 1,
    user_id: "user1",
    content: "📬 일반 메시지 (안 읽음)",
    lat: 35.1889725,
    lng: 128.9038629,
    is_time_capsule: false,
    ar_required: false,
    open_at: null,
    created_at: "2025-05-05T13:00:00Z",
    read: false,
    is_anonymous: true,
  },
  {
    id: 2,
    user_id: "user2",
    content: "📭 일반 메시지 (읽음)",
    lat: 35.1886725,
    lng: 128.9030629,
    is_time_capsule: false,
    ar_required: true,
    open_at: null,
    created_at: "2025-05-04T10:00:00Z",
    read: true,
    is_anonymous: false,
  },
  {
    id: 3,
    user_id: "user3",
    content: "⏳ 타임캡슐 (아직 열람 불가)",
    lat: 35.1888725,
    lng: 128.9036629,
    is_time_capsule: true,
    ar_required: false,
    open_at: "2025-05-15T12:00:00Z",
    created_at: "2025-05-01T10:00:00Z",
    read: false,
    is_anonymous: true,
  },
  {
    id: 4,
    user_id: "user4",
    content: "📬 타임캡슐 (열람 가능)",
    lat: 35.1887725,
    lng: 128.9032629,
    is_time_capsule: true,
    ar_required: true,
    open_at: "2025-05-01T10:00:00Z",
    created_at: "2025-04-29T09:00:00Z",
    read: false,
    is_anonymous: false,
  },
  {
    id: 5,
    user_id: "user5",
    content: "📬 타임캡슐 (열람 가능 & 읽음)",
    lat: 35.1885925,
    lng: 128.9033629,
    is_time_capsule: true,
    ar_required: false,
    open_at: "2025-05-02T10:00:00Z",
    created_at: "2025-04-30T14:00:00Z",
    read: true,
    is_anonymous: true,
  },
];
