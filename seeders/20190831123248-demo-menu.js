'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('menus', [
        {
          name: 'Nasi Putih',
          categoryId: 1,
          price: 3000,
          image: 'https://s1.bukalapak.com/img/1518157253/w-1000/Nasi_putih.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Nasi Goreng Telur Dadar',
          categoryId: 1,
          price: 7000,
          image: 'https://cdn2.tstatic.net/lampung/foto/bank/images/nasi-goreng-teri2_20160917_105724.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Nasi Goreng Spesial',
          categoryId: 1,
          price: 12000,
          image: 'https://i1.wp.com/resepkoki.id/wp-content/uploads/2016/10/Resep-Nasgor-Gila.jpg?fit=2314%2C2239&ssl=1es',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Indomie Kuah Telur Ceplok',
          categoryId: 2,
          price: 5000,
          image: 'https://img-global.cpcdn.com/003_recipes/de7e9ea07d327e14/640x640sq70/photo.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Indomie Goreng Telur Ceplok',
          categoryId: 2,
          price: 5000,
          image: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2018/7/23/37009058/37009058_43b0ae01-5d89-45da-93c7-88b738b4c42a_500_309.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Mie Ayam',
          categoryId: 2,
          price: 8000,
          image: 'https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/grid/original/8021_mie-ayam.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Mie Ayam Bakso',
          categoryId: 2,
          price: 10000,
          image: 'http://4.bp.blogspot.com/-NEPrh93PqJg/Uo-PhhAtOwI/AAAAAAAACxY/w-3s5nyK-nk/s1600/IMG_1340.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Bakso Biasa',
          categoryId: 2,
          price: 9000,
          image: 'https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2019/04/06/3230426085.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Ayam Goreng',
          categoryId: 3,
          price: 8000,
          image: 'http://www.dapurkobe.co.id/wp-content/uploads/ayam-goreng-pedas.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Ayam Bakar',
          categoryId: 3,
          price: 9000,
          image: 'http://www.dapurkobe.co.id/wp-content/uploads/ayam-panggang.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Ayam Geprek',
          categoryId: 3,
          price: 11000,
          image: 'https://palapanews.com/wp-content/uploads/2018/05/ayam-geprek-chicken-di-dapur-ayam-juara-99.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Ayam Senggol Bacok',
          categoryId: 3,
          price: 13000,
          image: 'https://www.thevocket.com/app/uploads/2019/07/Ayam-Goreng-McD-e1563947676711-1200x793.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Udang Goreng Tepung',
          categoryId: 4,
          price: 21000,
          image: 'https://selerasa.com/wp-content/uploads/2015/07/images_ikan_resep_udang_01-udang-goreng-tepung.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Cumi Saus Tiram',
          categoryId: 4,
          price: 25000,
          image: 'https://media-cdn.tripadvisor.com/media/photo-s/14/b3/a3/6c/cumi-cumi-saus-tiram.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Ikan Nila Bakar Spesial',
          categoryId: 4,
          price: 32000,
          image: 'https://i1.wp.com/www.resepayam.net/wp-content/uploads/2016/02/Ikan-bakar-kecap.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Es Teh Manis',
          categoryId: 5,
          price: 3000,
          image: 'https://cdn.akurat.co/images/uploads/images/akurat_20181029123557_B6tXpj.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Teh Manis Panas',
          categoryId: 5,
          price: 2000,
          image: 'https://yaspiery.files.wordpress.com/2017/07/es-teh.jpg?w=810',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Jus Alpukat',
          categoryId: 5,
          price: 7000,
          image: 'https://doktersehat.com/wp-content/uploads/2011/06/doktersehat-alpukat.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Jus Jeruk',
          categoryId: 5,
          price: 7000,
          image: 'https://www.ayamgepukshinta.com/uploads/2016/10/Jus-Jeruk.png',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Kopi Hitam',
          categoryId: 5,
          price: 4000,
          image: 'https://rianamaku.files.wordpress.com/2016/01/img_20160109_190321.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Kopi Hitam Dingin',
          categoryId: 5,
          price: 5000,
          image: 'http://timoroman.com/wp-content/uploads/2017/10/ES-KOPI-800x445.jpeg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ], {});
    },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
