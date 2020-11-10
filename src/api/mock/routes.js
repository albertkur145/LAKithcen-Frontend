const API = 'http://localhost:8081/api';

export default [
  {
    url: `${API}/categories`,
    method: 'GET',
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: {
        categories: [
          {
            id: 1,
            name: 'Bahan Kue',
            photo_link: 'ingredients',
          },
          {
            id: 2,
            name: 'Beras',
            photo_link: 'rice-bowl',
          },
          {
            id: 3,
            name: 'Bumbu & Bahan Masakan',
            photo_link: 'seasoning',
          },
          {
            id: 4,
            name: 'Kopi',
            photo_link: 'coffee',
          },
          {
            id: 5,
            name: 'Kue',
            photo_link: 'cake',
          },
          {
            id: 6,
            name: 'Makanan Beku',
            photo_link: 'steak',
          },
          {
            id: 7,
            name: 'Makanan Jadi',
            photo_link: 'puree',
          },
          {
            id: 8,
            name: 'Makanan Kaleng',
            photo_link: 'can',
          },
          {
            id: 9,
            name: 'Makanan Kering',
            photo_link: 'dried-fruit',
          },
          {
            id: 10,
            name: 'Makanan Ringan',
            photo_link: 'potato-chips',
          },
          {
            id: 11,
            name: 'Makanan Sarapan',
            photo_link: 'cereals',
          },
          {
            id: 12,
            name: 'Mie & Pasta',
            photo_link: 'spaguetti',
          },
        ],
      },
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/categoriesandsub`,
    method: 'GET',
    status: 200,
    response: {
      code: 200,
      status: 'OK',
      data: {
        categories: [
          {
            id: 1,
            name: 'Bahan Kue',
            subCategories: [
              {
                id: 1,
                name: 'Bahan Puding & Agar - Agar',
              },
              {
                id: 2,
                name: 'Baking Powder',
              },
              {
                id: 3,
                name: 'Baking Soda',
              },
              {
                id: 4,
                name: 'Coklat Bubuk',
              },
              {
                id: 5,
                name: 'Coklat Masak',
              },
              {
                id: 6,
                name: 'Perisa Makanan',
              },
              {
                id: 7,
                name: 'Pewarna Makanan',
              },
              {
                id: 8,
                name: 'Ragi',
              },
              {
                id: 9,
                name: 'Topping & Penghias Kue',
              },
            ],
          },
          {
            id: 2,
            name: 'Beras',
            subCategories: [
              {
                id: 10,
                name: 'Beras Hitam',
              },
              {
                id: 11,
                name: 'Beras Ketan',
              },
              {
                id: 12,
                name: 'Beras Merah',
              },
              {
                id: 13,
                name: 'Beras Putih',
              },
            ],
          },
          {
            id: 3,
            name: 'Bumbu & Bahan Masakan',
            subCategories: [
              {
                id: 14,
                name: 'Aneka Sambal',
              },
              {
                id: 15,
                name: 'Bawang',
              },
              {
                id: 16,
                name: 'Bumbu Masak Instan',
              },
              {
                id: 17,
                name: 'Cuka',
              },
              {
                id: 18,
                name: 'Garam & Merica',
              },
              {
                id: 19,
                name: 'Gula',
              },
              {
                id: 20,
                name: 'Kaldu & Penyedap Rasa',
              },
              {
                id: 21,
                name: 'Kecap',
              },
              {
                id: 22,
                name: 'Mayonnaise',
              },
              {
                id: 23,
                name: 'Minyak',
              },
              {
                id: 24,
                name: 'Rempah',
              },
              {
                id: 25,
                name: 'Santan',
              },
              {
                id: 26,
                name: 'Saus & Dressing',
              },
              {
                id: 27,
                name: 'Terasi',
              },
            ],
          },
          {
            id: 4,
            name: 'Kopi',
            subCategories: [
              {
                id: 28,
                name: 'Biji Kopi',
              },
              {
                id: 29,
                name: 'Kopi Bubuk',
              },
              {
                id: 30,
                name: 'Kopi Kemasan',
              },
              {
                id: 31,
                name: 'Krimer',
              },
            ],
          },
          {
            id: 5,
            name: 'Kue',
            subCategories: [
              {
                id: 32,
                name: 'Kue Basah',
              },
              {
                id: 33,
                name: 'Kue Kering',
              },
              {
                id: 34,
                name: 'Kue Ulang Tahun',
              },
            ],
          },
          {
            id: 6,
            name: 'Makanan Beku',
            subCategories: [
              {
                id: 35,
                name: 'Bakso',
              },
              {
                id: 36,
                name: 'Buah Beku',
              },
              {
                id: 37,
                name: 'Camilan Beku',
              },
              {
                id: 38,
                name: 'Daging Olahan Lainnya',
              },
              {
                id: 39,
                name: 'Dessert',
              },
              {
                id: 40,
                name: 'Kentang Beku',
              },
              {
                id: 41,
                name: 'Nugget',
              },
              {
                id: 42,
                name: 'Pastry & Olahan Tepung',
              },
              {
                id: 43,
                name: 'Sayuran Beku',
              },
              {
                id: 44,
                name: 'Siomay',
              },
              {
                id: 45,
                name: 'Sosis',
              },
            ],
          },
          {
            id: 7,
            name: 'Makanan Jadi',
            subCategories: [
              {
                id: 46,
                name: 'Buah Olahan',
              },
              {
                id: 47,
                name: 'Lauk Pauk',
              },
              {
                id: 48,
                name: 'Makanan Asin',
              },
              {
                id: 49,
                name: 'Makanan Manis',
              },
              {
                id: 50,
                name: 'Nasi Tumpeng',
              },
              {
                id: 51,
                name: 'Sayur Olahan',
              },
            ],
          },
          {
            id: 8,
            name: 'Makanan Kaleng',
            subCategories: [
              {
                id: 52,
                name: 'Buah Kaleng',
              },
              {
                id: 53,
                name: 'Daging Kaleng',
              },
              {
                id: 54,
                name: 'Ikan Kaleng',
              },
              {
                id: 55,
                name: 'Makanan Instan Kaleng',
              },
            ],
          },
          {
            id: 9,
            name: 'Makanan Kering',
            subCategories: [
              {
                id: 56,
                name: 'Abon',
              },
              {
                id: 57,
                name: 'Bawang Goreng',
              },
              {
                id: 58,
                name: 'Daging Kering & Asin',
              },
              {
                id: 59,
                name: 'Kerupuk',
              },
            ],
          },
          {
            id: 10,
            name: 'Makanan Ringan',
            subCategories: [
              {
                id: 60,
                name: 'Biskuit & Wafer',
              },
              {
                id: 61,
                name: 'Camilan Instant',
              },
              {
                id: 62,
                name: 'Cokelat',
              },
              {
                id: 63,
                name: 'Kacang',
              },
              {
                id: 64,
                name: 'Keripik',
              },
              {
                id: 65,
                name: 'Permen',
              },
              {
                id: 66,
                name: 'Puding & Jelly',
              },
            ],
          },
          {
            id: 11,
            name: 'Makanan Sarapan',
            subCategories: [
              {
                id: 67,
                name: 'Granola',
              },
              {
                id: 68,
                name: 'Meses',
              },
              {
                id: 69,
                name: 'Muesli',
              },
              {
                id: 70,
                name: 'Oat',
              },
              {
                id: 71,
                name: 'Quinoa',
              },
              {
                id: 72,
                name: 'Roti',
              },
              {
                id: 73,
                name: 'Selai',
              },
              {
                id: 74,
                name: 'Sereal',
              },
            ],
          },
          {
            id: 12,
            name: 'Mie & Pasta',
            subCategories: [
              {
                id: 75,
                name: 'Aneka Pasta',
              },
              {
                id: 76,
                name: 'Bihun & Soun',
              },
              {
                id: 77,
                name: 'Kwetiau',
              },
              {
                id: 78,
                name: 'Mie Impor',
              },
              {
                id: 79,
                name: 'Mie Instan',
              },
              {
                id: 80,
                name: 'Mie Telur',
              },
            ],
          },
        ],
      },
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/product/category`,
    method: 'GET',
    status: 200,
    params: {
      params: {
        categoryId: 1,
      },
    },
    response: {
      code: 200,
      status: 'OK',
      data: {
        title: 'Kue',
        products: [
          {
            id: 1,
            name: 'Kue Talan Pandan',
            price: 60000,
            photo_link: 'talan_pandan',
            rating: 4.73,
            evaluators: 127,
          },
        ],
      },
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/product/subcategory`,
    method: 'GET',
    status: 200,
    params: {
      params: {
        subCategoryId: 2,
      },
    },
    response: {
      code: 200,
      status: 'OK',
      data: {
        title: 'Kue Kering',
        products: [
          {
            id: 1,
            name: 'Kastengel Keju',
            price: 75000,
            photo_link: 'kastengel',
            rating: 4.68,
            evaluators: 104,
          },
          {
            id: 2,
            name: 'Nastar',
            price: 62500,
            photo_link: 'nastar',
            rating: 4.94,
            evaluators: 165,
          },
          {
            id: 3,
            name: 'Semprit Dahlia',
            price: 50000,
            photo_link: 'semprit_dahlia',
            rating: 4.75,
            evaluators: 117,
          },
          {
            id: 4,
            name: 'Akar Kelapa',
            price: 35000,
            photo_link: 'akar_kelapa',
            rating: 3.88,
            evaluators: 72,
          },
          {
            id: 5,
            name: 'Bangkit Bintang',
            price: 42500,
            photo_link: 'bangkit',
            rating: 4.12,
            evaluators: 65,
          },
          {
            id: 6,
            name: 'Chocholate Chip Cookies',
            price: 40000,
            photo_link: 'chocholate_chip_cookies',
            rating: 4.38,
            evaluators: 47,
          },
          {
            id: 7,
            name: 'Choco Cornflakes',
            price: 45000,
            photo_link: 'choco_cornflakes',
            rating: 4.63,
            evaluators: 120,
          },
          {
            id: 8,
            name: 'Kembang Goyang',
            price: 35000,
            photo_link: 'kembang_goyang',
            rating: 3.29,
            evaluators: 26,
          },
          {
            id: 9,
            name: 'Lidah Kucing',
            price: 65000,
            photo_link: 'lidah_kucing',
            rating: 4.75,
            evaluators: 93,
          },
          {
            id: 10,
            name: 'Pastel Kering',
            price: 52500,
            photo_link: 'pastel_kering',
            rating: 4.41,
            evaluators: 71,
          },
          {
            id: 11,
            name: 'Putri Salju',
            price: 60000,
            photo_link: 'putri_salju',
            rating: 4.94,
            evaluators: 107,
          },
          {
            id: 12,
            name: 'Sagu Keju',
            price: 58000,
            photo_link: 'sagu_keju',
            rating: 4.68,
            evaluators: 134,
          },
          {
            id: 13,
            name: 'Satu',
            price: 39500,
            photo_link: 'satu',
            rating: 2.19,
            evaluators: 14,
          },
          {
            id: 14,
            name: 'Skippy',
            price: 70000,
            photo_link: 'skippy',
            rating: 4.79,
            evaluators: 171,
          },
          {
            id: 15,
            name: 'Thumbprint Strawberry Cookies',
            price: 45000,
            photo_link: 'thumbprint_strawberry',
            rating: 4.40,
            evaluators: 57,
          },
        ],
      },
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/product/subcategory`,
    method: 'GET',
    status: 200,
    params: {
      params: {
        subCategoryId: 3,
      },
    },
    response: {
      code: 200,
      status: 'OK',
      data: {
        title: 'Kue Basah',
        products: [
          {
            id: 1,
            name: 'Kue Talan Pandan',
            price: 40000,
            photo_link: 'talan_pandan',
            rating: 4.80,
            evaluators: 99,
          },
          {
            id: 2,
            name: 'Banana Roll Cake',
            price: 75000,
            photo_link: 'banana_roll_cake',
            rating: 4.24,
            evaluators: 67,
          },
          {
            id: 3,
            name: 'Bolu Gulung',
            price: 60000,
            photo_link: 'bolu_gulung',
            rating: 4.32,
            evaluators: 75,
          },
          {
            id: 4,
            name: 'Cendol Cake',
            price: 65000,
            photo_link: 'cendol_cake',
            rating: 4.93,
            evaluators: 115,
          },
          {
            id: 5,
            name: 'Dadar Gulung Kelapa',
            price: 43000,
            photo_link: 'dadar_gulung',
            rating: 4.63,
            evaluators: 138,
          },
          {
            id: 6,
            name: 'Donat Mix',
            price: 125000,
            photo_link: 'donat',
            rating: 4.19,
            evaluators: 81,
          },
          {
            id: 7,
            name: 'Lumpur Coklat',
            price: 62500,
            photo_link: 'lumpur',
            rating: 4.72,
            evaluators: 94,
          },
          {
            id: 8,
            name: 'Manja Strawberry',
            price: 80000,
            photo_link: 'manja_strawberry',
            rating: 4.66,
            evaluators: 146,
          },
          {
            id: 9,
            name: 'Nagasari Pisang',
            price: 35000,
            photo_link: 'nagasari',
            rating: 2.95,
            evaluators: 14,
          },
          {
            id: 10,
            name: 'Pepare Kelapa',
            price: 47000,
            photo_link: 'pepare_kelapa',
            rating: 3.29,
            evaluators: 27,
          },
          {
            id: 11,
            name: 'Puding Labu Kuning',
            price: 60000,
            photo_link: 'puding_labu_kuning',
            rating: 3.60,
            evaluators: 52,
          },
          {
            id: 12,
            name: 'Pukis Original',
            price: 65000,
            photo_link: 'pukis',
            rating: 4.76,
            evaluators: 133,
          },
          {
            id: 13,
            name: 'Pumpkin Kuh Kueh',
            price: 56000,
            photo_link: 'pumpkin_kuh_kueh',
            rating: 3.16,
            evaluators: 32,
          },
          {
            id: 14,
            name: 'Putu Coklat',
            price: 37500,
            photo_link: 'putu',
            rating: 4.34,
            evaluators: 49,
          },
          {
            id: 15,
            name: 'Bolu Gulung',
            price: 95000,
            photo_link: 'bolu_gulung',
            rating: 4.97,
            evaluators: 68,
          },
        ],
      },
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/product/subcategory`,
    method: 'GET',
    status: 200,
    params: {
      params: {
        subCategoryId: 1,
      },
    },
    response: {
      code: 200,
      status: 'OK',
      data: {
        title: 'Dimsum',
        products: [
          {
            id: 1,
            name: 'Kaki Naga',
            price: 45000,
            rating: 4.73,
            evaluators: 127,
            photo_link: 'kaki_naga',
          },
          {
            id: 2,
            name: 'Hakau Udang',
            price: 70000,
            rating: 4.13,
            evaluators: 92,
            photo_link: 'hakau',
          },
          {
            id: 3,
            name: 'Siomay Ayam',
            price: 52500,
            rating: 4.92,
            evaluators: 164,
            photo_link: 'siomay',
          },
          {
            id: 4,
            name: 'Tofu Skin Roll',
            price: 38000,
            rating: 4.27,
            evaluators: 76,
            photo_link: 'tofu_skin_roll',
          },
          {
            id: 5,
            name: 'Mantau Goreng',
            price: 40000,
            rating: 3.35,
            evaluators: 41,
            photo_link: 'mantau',
          },
          {
            id: 6,
            name: 'Bakpao Coklat',
            price: 42500,
            rating: 4.86,
            evaluators: 207,
            photo_link: 'bakpao',
          },
          {
            id: 7,
            name: 'Ekado Ayam & Telur Puyuh',
            price: 50000,
            rating: 4.64,
            evaluators: 73,
            photo_link: 'ekado',
          },
          {
            id: 8,
            name: 'Chicken Gyoza Kuotie',
            price: 65000,
            rating: 3.94,
            evaluators: 59,
            photo_link: 'gyoza',
          },
          {
            id: 9,
            name: 'Lumpia Keju',
            price: 45000,
            rating: 4.36,
            evaluators: 83,
            photo_link: 'lumpia',
          },
          {
            id: 10,
            name: 'Vegan Manti',
            price: 87000,
            rating: 3.27,
            evaluators: 34,
            photo_link: 'manti',
          },
          {
            id: 11,
            name: 'Pangsit Ayam',
            price: 30000,
            rating: 4.82,
            evaluators: 144,
            photo_link: 'pangsit',
          },
          {
            id: 12,
            name: 'Potato Cheese Pierogi',
            price: 67500,
            rating: 4.41,
            evaluators: 76,
            photo_link: 'pierogi',
          },
          {
            id: 13,
            name: 'Chicken Samosa',
            price: 60000,
            rating: 3.08,
            evaluators: 19,
            photo_link: 'samosa',
          },
          {
            id: 14,
            name: 'Xiao Long Bao',
            price: 72500,
            rating: 3.74,
            evaluators: 68,
            photo_link: 'xiao_long_bao',
          },
          {
            id: 15,
            name: 'Kulit Pangsit',
            price: 25000,
            rating: 4.93,
            evaluators: 247,
            photo_link: 'kulit_pangsit',
          },
          {
            id: 16,
            name: 'Kwotie Daging Sapi',
            price: 60000,
            rating: 4.14,
            evaluators: 96,
            photo_link: 'kwotie',
          },
          {
            id: 17,
            name: 'Vietnamese Spring Rolls',
            price: 45000,
            rating: 3.76,
            evaluators: 83,
            photo_link: 'spring_roll',
          },
          {
            id: 18,
            name: 'Steamed Meatball',
            price: 40000,
            rating: 3.25,
            evaluators: 47,
            photo_link: 'steamed_meatball',
          },
        ],
      },
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/product/name`,
    method: 'GET',
    status: 200,
    params: {
      params: {
        productName: 'Mie Goreng',
      },
    },
    response: {
      code: 200,
      status: 'OK',
      data: {
        products: [
          {
            id: 1,
            name: 'Kaki Naga',
            price: 45000,
            rating: 4.73,
            evaluators: 127,
            photo_link: 'kaki_naga',
          },
          {
            id: 2,
            name: 'Hakau Udang',
            price: 70000,
            rating: 4.13,
            evaluators: 92,
            photo_link: 'hakau',
          },
          {
            id: 3,
            name: 'Siomay Ayam',
            price: 52500,
            rating: 4.92,
            evaluators: 164,
            photo_link: 'siomay',
          },
          {
            id: 4,
            name: 'Tofu Skin Roll',
            price: 38000,
            rating: 4.27,
            evaluators: 76,
            photo_link: 'tofu_skin_roll',
          },
          {
            id: 5,
            name: 'Mantau Goreng',
            price: 40000,
            rating: 3.35,
            evaluators: 41,
            photo_link: 'mantau',
          },
          {
            id: 6,
            name: 'Bakpao Coklat',
            price: 42500,
            rating: 4.86,
            evaluators: 207,
            photo_link: 'bakpao',
          },
          {
            id: 7,
            name: 'Ekado Ayam & Telur Puyuh',
            price: 50000,
            rating: 4.64,
            evaluators: 73,
            photo_link: 'ekado',
          },
          {
            id: 8,
            name: 'Chicken Gyoza Kuotie',
            price: 65000,
            rating: 3.94,
            evaluators: 59,
            photo_link: 'gyoza',
          },
          {
            id: 9,
            name: 'Lumpia Keju',
            price: 45000,
            rating: 4.36,
            evaluators: 83,
            photo_link: 'lumpia',
          },
          {
            id: 10,
            name: 'Vegan Manti',
            price: 87000,
            rating: 3.27,
            evaluators: 34,
            photo_link: 'manti',
          },
          {
            id: 11,
            name: 'Pangsit Ayam',
            price: 30000,
            rating: 4.82,
            evaluators: 144,
            photo_link: 'pangsit',
          },
          {
            id: 12,
            name: 'Potato Cheese Pierogi',
            price: 67500,
            rating: 4.41,
            evaluators: 76,
            photo_link: 'pierogi',
          },
        ],
      },
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/product/id`,
    method: 'GET',
    status: 200,
    params: {
      params: {
        productId: 1,
      },
    },
    response: {
      code: 200,
      status: 'OK',
      data: {
        path: {
          category: {
            id: 2,
            name: 'Mie & Pasta',
          },
          subCategory: {
            id: 4,
            name: 'Mie Instan',
          },
        },
        product: {
          id: 1,
          name: 'Indome Goreng Rasa Rendang 10 Pcs',
          price: 25000,
          description: 'Indomie goreng rasa rendang terbaru, baru keluar di tahun 2020. Sangat cocok dinikmati bersama keluarga dimusim panas ataupun dingin, dengan khas rasa rendang yang bikin kamu jadi nendang. Stok terbatas, siapa cepat dia dapat',
          seen: 52,
          rating: 4.82,
          evaluators: 43,
          photo_links: [
            {
              id: 1,
              link: 'bakpao',
            },
            {
              id: 2,
              link: 'bolu_gulung',
            },
            {
              id: 3,
              link: 'cendol_cake',
            },
            {
              id: 4,
              link: 'ekado',
            },
          ],
          assessment: [
            {
              id: 1,
              user: {
                id: 4,
                name: 'Budi Utama',
              },
              rate: 5,
              comment: 'Produk datang tepat waktu, kemasan double safety, setelah dimasak rasanya nendang sekali... Mantap sekali sangat recommended!',
              date: '04/01/2021',
            },
            {
              id: 2,
              user: {
                id: 6,
                name: 'Rio Martin',
              },
              rate: 4,
              comment: 'Mantap, rasanya enak sekali. Tetapi saya masih suka indomie goreng biasa, jadi saya kasih 4 saja dulu ya hehe',
              date: '22/12/2020',
            },
          ],
        },
      },
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/product/seen`,
    method: 'PUT',
    status: 200,
    params: {
      productId: 1,
    },
    response: {
      code: 200,
      status: 'OK',
      data: null,
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/assessment`,
    method: 'GET',
    status: 200,
    params: {
      params: {
        productId: 1,
      },
    },
    response: {
      code: 200,
      status: 'OK',
      data: {
        assessment: [
          {
            id: 1,
            user: {
              id: 4,
              name: 'Budi Utama',
            },
            rate: 5,
            comment: 'Produk datang tepat waktu, kemasan double safety, setelah dimasak rasanya nendang sekali... Mantap sekali sangat recommended!',
            date: '04/01/2021',
          },
          {
            id: 2,
            user: {
              id: 6,
              name: 'Rio Martin',
            },
            rate: 4,
            comment: 'Mantap, rasanya enak sekali. Tetapi saya masih suka indomie goreng biasa, jadi saya kasih 4 saja dulu ya hehe',
            date: '22/12/2020',
          },
        ],
      },
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/auth/login`,
    method: 'POST',
    status: 200,
    params: {
      email: 'albert@gmail.com',
      password: '123',
    },
    response: {
      code: 200,
      status: 'OK',
      data: {
        token: 'eJhbGciJIzUxMiJ9yJyb2xlIjpbIlJPTEfVVNFUiJdLCJIi',
        user: {
          name: 'Albert Kurniawan',
          email: 'albertkur@gmail.com',
          phoneNumber: '081297541232',
          address: 'Jalan Ribawa Yunsudiro No 4E',
          province: 'Sumatra Selatan',
          city: 'Palembang',
          region: 'Ilir Barat II',
          status: 'Active',
          role: 'ROLE_USER',
        },
      },
      paging: null,
      errors: null,
    },
  },
  {
    url: `${API}/auth/register`,
    method: 'POST',
    status: 200,
    params: {
      email: 'albert@gmail.com',
      phoneNumber: '081392290882',
      password: '123',
    },
    response: {
      code: 200,
      status: 'OK',
      data: null,
      paging: null,
      errors: null,
    },
  },
];
