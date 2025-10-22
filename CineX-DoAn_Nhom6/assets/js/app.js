// CineX front-end demo JS
window.CineX = (function(){
  const demoMovies = [
  {
    id: 1,
    title: "TEE YOD: Quỷ Ăn Tạng Phần 3",
    rating: 7.9,
    year: 2025,
    genres: ["Horror", "Mystery"],
    duration: 104,
    poster: "assets/img/ty3-sneak-main_poster-2-layered.jpg",
    overview:
      "Yak và gia đình đối mặt nỗi kinh hoàng khi em út Yee mất tích bí ẩn. Họ lên đường đến khu rừng ma ám Bong Sa Noh Bian để cứu Yee trước khi linh hồn tà ác bị đánh thức.",
    popular: 95
  },
  {
    id: 2,
    title: "Tử Chiến Trên Không",
    rating: 8.3,
    year: 2025,
    genres: ["Action", "Thriller"],
    duration: 118,
    poster: "assets/img/teaser_tctk_social_fa.jpg",
    overview:
      "Phim hành động - kịch tính lấy cảm hứng từ vụ cướp máy bay có thật tại Việt Nam sau năm 1975. Những pha đối đầu nghẹt thở và cảm xúc mãnh liệt.",
    popular: 92
  },
  {
    id: 3,
    title: "Chị Ngã Em Nâng",
    rating: 7.5,
    year: 2025,
    genres: ["Drama", "Family", "Comedy"],
    duration: 122,
    poster: "assets/img/CNEN_MAIN2_1500x1200.webp",
    overview:
      "Câu chuyện cảm động về hai chị em Thương và Lực trong gia đình làm nhang truyền thống, khi họ đối mặt với rạn nứt và thử thách sinh tử để tìm lại tình thân.",
    popular: 88
  },
  {
    id: 4,
    title: "Chainsaw Man: Chương Reze",
    rating: 9.1,
    year: 2025,
    genres: ["Action", "Animation", "Fantasy"],
    duration: 100,
    poster: "assets/img/new-poster-for-chainsaw-man-the-movie-reze-arc-v0-sffiym9utbpf1.jpeg.webp",
    overview:
      "Denji và Pochita trở lại trong phần phim điện ảnh đầu tiên của Chainsaw Man. Cuộc chiến sinh tử giữa quỷ dữ và thợ săn quỷ bùng nổ trên màn ảnh rộng.",
    popular: 99
  },
  {
    id: 5,
    title: "Nhà Ma Xó",
    rating: 7.4,
    year: 2025,
    genres: ["Horror", "Family"],
    duration: 110,
    poster: "assets/img/nha-ma-xo-1-1189-5768.jpg.webp",
    overview:
      "Một gia đình đối mặt với chuỗi hiện tượng kỳ quái khi người con trai vớt được chiếc khạp sành bí ẩn. Nỗi kinh hoàng bắt đầu len lỏi vào từng ngóc ngách ngôi nhà.",
    popular: 90
  },
  {
    id: 6,
    title: "Cục Vàng Của Ngoại",
    rating: 8.0,
    year: 2025,
    genres: ["Drama", "Family"],
    duration: 119,
    poster: "assets/img/base64-17552498678811548582339.jpeg",
    overview:
      "Câu chuyện ấm áp về tình bà cháu trong xóm nhỏ. Tình thương của bà Hậu dành cho cháu trở thành nguồn sáng giữa cuộc sống đầy thử thách.",
    popular: 85
  },
  {
    id: 7,
    title: "Bà Đừng Buồn Con",
    rating: 8.2,
    year: 2025,
    genres: ["Drama", "Family"],
    duration: 120,
    poster: "assets/img/z7115133388708_5a2eb6b5ab07b8d0a111d9d4fefc04ce.jpg",
    overview:
      "Tiến – cậu thiếu niên mồ côi sống cùng bà nội nơi phố cổ Hà Nội. Tình thương và nghị lực giúp hai bà cháu vượt qua nghèo khó để tìm lại khát vọng sống.",
    popular: 87
  },
  {
    id: 8,
    title: "Thanh Sói: Cúc Dại Trong Đêm",
    rating: 8.6,
    year: 2023,
    genres: ["Action", "Drama"],
    duration: 126,
    poster: "assets/img/491235986_4917418208482727_2050898658024075519_n.jpg",
    overview:
      "Tiền truyện của Hai Phượng. Câu chuyện về Cúc Dại – cô gái mạnh mẽ đối đầu với bạo lực, phản bội và quá khứ tăm tối trên con đường giành lại chính mình.",
    popular: 94
  },
  {
    id: 9,
    title: "Inside Out 2",
    rating: 8.9,
    year: 2024,
    genres: ["Animation", "Family", "Comedy"],
    duration: 102,
    poster: "assets/img/MV5BYWY3MDE2Y2UtOTE3Zi00MGUzLTg2MTItZjE1ZWVkMGVlODRmXkEyXkFqcGc@._V1_.jpg",
    overview:
      "Cảm xúc của cô bé Riley trở lại cùng những cảm xúc mới như Lo Âu, Xấu Hổ và Ghen Tị. Một hành trình cảm xúc rực rỡ và sâu sắc của tuổi thiếu niên.",
    popular: 98
  },
  {
    id: 10,
    title: "Dune: Hành Tinh Cát Phần 2",
    rating: 9.0,
    year: 2024,
    genres: ["Action", "Sci-fi", "Drama"],
    duration: 150,
    poster: "assets/img/MV5BYTAxZjA5NTQtMTJhZC00NjMwLTk5OGUtYmQ3MDM2M2NkMjE1XkEyXkFqcGc@._V1_.jpg",
    overview:
      "Paul Atreides cùng Chani và người Fremen tiếp tục cuộc chiến chống lại đế chế Harkonnen để trả thù và giành lại tự do cho Arrakis.",
    popular: 100
  },
  {
    id: 11,
    title: "Đất Rừng Phương Nam",
    rating: 8.1,
    year: 2023,
    genres: ["Drama", "Adventure"],
    duration: 112,
    poster: "assets/img/MV5BNDllMWM5MjktNmE4MC00MTc3LTk2YjItOGFkNjgyMjhkMjRiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    overview:
      "Hành trình tìm cha của An – cậu bé miền Tây Nam Bộ, qua những cánh rừng ngập mặn và ký ức tuổi thơ đong đầy hồn quê Việt.",
    popular: 86
  },
  {
    id: 12,
    title: "Avatar: Dòng Chảy Của Nước",
    rating: 8.4,
    year: 2022,
    genres: ["Sci-fi", "Action", "Adventure"],
    duration: 190,
    poster: "assets/img/MV5BZGFlZDRhYmYtNzNkOC00NTJjLWIyOTYtMDBiZjdjNmQyNzU0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    overview:
      "Jake Sully và Neytiri cùng gia đình bảo vệ Pandora trước cuộc xâm lược mới. Siêu phẩm kỹ xảo đỉnh cao đưa khán giả trở lại thế giới kỳ ảo đầy cảm xúc.",
    popular: 99
  },
  {
    id: 13,
    title: "John Wick 4",
    rating: 8.8,
    year: 2023,
    genres: ["Action", "Thriller"],
    duration: 169,
    poster: "assets/img/MV5BNDkwOGNlZTctOTgyNS00ZTNkLWE4MDgtNzZmZTg1NDQ0YjQzXkEyXkFqcGc@._V1_.jpg",
    overview:
      "John Wick tiếp tục hành trình báo thù không khoan nhượng. Một màn trình diễn võ thuật và bắn súng mãn nhãn cùng Keanu Reeves.",
    popular: 97
  },
  {
    id: 14,
    title: "The First Slam Dunk",
    rating: 9.2,
    year: 2023,
    genres: ["Animation", "Sports", "Drama"],
    duration: 124,
    poster: "assets/img/MV5BMGViYmNmZDUtODFlNi00MjMxLWI0ZmYtYTBiMDg2OGRiODQ4XkEyXkFqcGc@._V1_.jpg",
    overview:
      "Slam Dunk trở lại trên màn ảnh rộng. Câu chuyện cảm động về đội bóng Shohoku và khát vọng vươn lên chạm đến ước mơ tuổi trẻ.",
    popular: 98
  },
  {
    id: 15,
    title: "Kung Fu Panda 4",
    rating: 8.0,
    year: 2024,
    genres: ["Animation", "Action", "Comedy"],
    duration: 95,
    poster: "assets/img/MV5BMzJlNGYxYzQtOTg4MC00OTMyLTkwYzMtZDRlNTgwY2YwOWYxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    overview:
      "Po trở lại với nhiệm vụ truyền lại danh hiệu Chiến Binh Rồng cho thế hệ mới, nhưng một mối nguy từ thế giới linh hồn lại trỗi dậy.",
    popular: 93
  }
];

  function q(sel, root=document){ return root.querySelector(sel); }
  function qa(sel, root=document){ return [...root.querySelectorAll(sel)]; }

  function makeMovieCard(m){
    return `
      <div class="col-6 col-md-4 col-xl-3">
        <div class="card movie h-100 shadow-sm">
          <img class="poster" src="${m.poster}" alt="${m.title}">
          <div class="card-body d-flex flex-column">
            <div class="d-flex justify-content-between align-items-center mb-2">
              <span class="badge badge-rating"><i class="bi bi-star-fill"></i> ${m.rating}</span>
              <small class="text-light">${m.year}</small>
            </div>
            <h3 class="h6 text-truncate text-light" title="${m.title}">${m.title}</h3>
            <div class="d-flex flex-wrap gap-1 mb-3">
              ${m.genres.slice(0,2).map(g=>`<span class="badge tag">${g}</span>`).join("")}
            </div>
            <div class="mt-auto d-flex gap-2">
              <a class="btn btn-sm btn-primary w-100" href="details.html?id=${m.id}"><i class="bi bi-ticket-perforated"></i> Đặt vé</a>
              <button class="btn btn-sm btn-outline-light" data-like="${m.id}" aria-label="Yêu thích"><i class="bi bi-heart"></i></button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function renderMovies(list){
    const grid = q("#movieGrid");
    if (!grid) return;
    grid.innerHTML = list.map(makeMovieCard).join("");
    // like toggle
    grid.addEventListener("click", (e)=>{
      const btn = e.target.closest("[data-like]");
      if(btn){
        btn.classList.toggle("active");
        btn.innerHTML = btn.classList.contains("active") ? '<i class="bi bi-heart-fill"></i>' : '<i class="bi bi-heart"></i>';
      }
    });
  }

  // Map tên thể loại tiếng Việt -> tiếng Anh (khớp với demoMovies)
const GENRE_MAP = {
  "Hành động": "Action",
  "Tình cảm": "Romance",
  "Kinh dị": "Horror",
  "Hoạt hình": "Animation",
  "Hài": "Comedy",
  "Khoa học viễn tưởng": "Sci-fi",
  "Viễn tưởng": "Sci-fi",
};

function normalizeGenre(label) {
  if (!label) return "";
  const mapped = GENRE_MAP[label.trim()] || label.trim();
  return mapped.toLowerCase(); // so sánh không phân biệt hoa/thường
}

function applyFilters(){
  const search = (q("#searchInput")?.value || "").toLowerCase();
  const rawGenre = q("#genreFilter")?.value || "";         // tiếng Việt
  const genre = normalizeGenre(rawGenre);                   // -> tiếng Anh (lowercase)
  const minRating = parseFloat(q("#ratingFilter")?.value || "0");

  let list = demoMovies.filter(m => {
    const mGenres = m.genres.map(g => g.toLowerCase());
    const passSearch = !search || m.title.toLowerCase().includes(search);
    const passGenre  = !genre || mGenres.includes(genre);
    const passRate   = m.rating >= minRating;
    return passSearch && passGenre && passRate;
  });

  if (q("#sortRating")?.checked)      list.sort((a,b)=>b.rating-a.rating);
  else if (q("#sortLatest")?.checked) list.sort((a,b)=>b.year-a.year);
  else                                list.sort((a,b)=>b.popular-a.popular);

  renderMovies(list);
}

function initIndex(){
  // Search: dùng input
  q("#searchInput")?.addEventListener("input", applyFilters);

  // Selects: dùng change để chắc chắn trên Safari
  q("#genreFilter") ?.addEventListener("change", applyFilters);
  q("#ratingFilter")?.addEventListener("change", applyFilters);

  // Radios sort
  ["#sortPopular","#sortRating","#sortLatest"].forEach(id=>{
    q(id)?.addEventListener("change", applyFilters);
  });

  applyFilters();
}

  // ------- Details page -------
  function getParam(name){
    const url = new URL(window.location.href);
    return url.searchParams.get(name);
  }

  function initDetails(){
    const id = parseInt(getParam("id") || "1");
    const m = demoMovies.find(x=>x.id===id) || demoMovies[0];
    if (q("#title")) q("#title").textContent = m.title;
    if (q("#overview")) q("#overview").textContent = m.overview;
    if (q("#poster")) q("#poster").src = m.poster;
    if (q("#genres")) q("#genres").textContent = m.genres.join(", ");
    if (q("#duration")) q("#duration").textContent = m.duration;
    if (q("#ratingBadge")) q("#ratingBadge").textContent = `IMDb ${m.rating}`;

    // Build date tabs + times
    const dates = [...Array(7)].map((_,i)=>{
      const d = new Date(); d.setDate(d.getDate()+i);
      return { key: d.toISOString().slice(0,10), label: d.toLocaleDateString("vi-VN", { weekday:"short", day:"2-digit", month:"2-digit" }) };
    });
    const dateTabs = q("#dateTabs");
    if (dateTabs){
      dateTabs.innerHTML = dates.map((d,i)=>`<button class="btn btn-sm ${i===0?'btn-primary':'btn-outline-primary'}" data-date="${d.key}">${d.label}</button>`).join("");
      dateTabs.addEventListener("click", e=>{
        const btn = e.target.closest("[data-date]");
        if (!btn) return;
        qa("#dateTabs .btn").forEach(b=>b.className="btn btn-sm btn-outline-primary");
        btn.className = "btn btn-sm btn-primary";
        renderTimeSlots(btn.dataset.date);
      });
      renderTimeSlots(dates[0].key);
    }

    // Seat map
    buildSeatMap();
    updateTotals();
    q("#btnCheckout")?.addEventListener("click", ()=>{
      alert("Demo: chuyển qua bước thanh toán (tự tích hợp backend sau).");
    });
  }

  function renderTimeSlots(dateKey){
    const times = ["10:30","13:15","15:40","18:00","20:15","22:00"];
    const box = q("#timeSlots");
    if (!box) return;
    box.innerHTML = times.map(t=>`
      <div class="col-4 col-md-3 col-lg-2">
        <button class="btn w-100 btn-outline-secondary" data-time="${dateKey} ${t}">${t}</button>
      </div>
    `).join("");
    box.addEventListener("click", e=>{
      const b = e.target.closest("[data-time]");
      if (!b) return;
      qa("#timeSlots .btn").forEach(x=>x.classList.remove("active"));
      b.classList.add("active");
    }, { once: true });
  }

  const seatRows = "ABCDEFGH".split("");
  const seatCols = [...Array(10)].map((_,i)=>i+1);
  const soldRandom = new Set(["A3","A4","B5","C6","D2","E9","F1","G7"]);

  function buildSeatMap(){
    const map = q("#seatMap");
    if (!map) return;
    map.innerHTML = "";
    seatRows.forEach(r=>{
      seatCols.forEach(c=>{
        const id = `${r}${c}`;
        const div = document.createElement("div");
        div.className = "seat" + (soldRandom.has(id) ? " sold" : "");
        div.textContent = id;
        div.dataset.seat = id;
        div.addEventListener("click", ()=>{
          if (div.classList.contains("sold")) return;
          div.classList.toggle("selected");
          updateTotals();
        });
        map.appendChild(div);
      });
    });
  }

  function updateTotals(){
    const price = 90000;
    const selected = qa(".seat.selected").map(x=>x.dataset.seat);
    if (q("#selectedSeats")) q("#selectedSeats").textContent = selected.join(", ") || "—";
    if (q("#totalPrice")) q("#totalPrice").textContent = (selected.length*price).toLocaleString("vi-VN") + "đ";
    const btn = q("#btnCheckout");
    if (btn) btn.disabled = selected.length===0;
  }

  return { initIndex, initDetails };
})();
