import { defineStore } from 'pinia';
import axios from 'axios';

export const mainStore = defineStore('mainStore', {
  state: () => ({ count: 0 }),
  actions: {
    loadDataFromAPI() {
      const responseNoApi = [{
        id: 1, first_name: 'Ruben', last_name: 'Wooler', phone_number: '419-240-1934', favorite: false,
      },
      {
        id: 2, first_name: 'Errol', last_name: 'Phillippo', phone_number: '250-354-8102', favorite: false,
      },
      {
        id: 3, first_name: 'Justen', last_name: 'MacRitchie', phone_number: '670-637-5752', favorite: false,
      },
      {
        id: 4, first_name: 'Chas', last_name: 'Anyene', phone_number: '107-379-3170', favorite: false,
      },
      {
        id: 5, first_name: 'Ruy', last_name: 'Addekin', phone_number: '523-784-0588', favorite: false,
      },
      {
        id: 6, first_name: 'Angil', last_name: 'Heakins', phone_number: '649-349-9463', favorite: false,
      },
      {
        id: 7, first_name: 'Spencer', last_name: 'Chaster', phone_number: '391-245-2547', favorite: false,
      },
      {
        id: 8, first_name: 'Cyril', last_name: 'Hellin', phone_number: '651-681-0933', favorite: false,
      },
      {
        id: 9, first_name: 'Wolf', last_name: 'Carlino', phone_number: '311-711-9897', favorite: false,
      },
      {
        id: 10, first_name: 'Rutherford', last_name: 'Britland', phone_number: '452-237-6894', favorite: false,
      },
      {
        id: 11, first_name: 'Mair', last_name: 'Wastall', phone_number: '645-785-7533', favorite: false,
      },
      {
        id: 12, first_name: 'Candis', last_name: 'Nevins', phone_number: '468-334-2487', favorite: false,
      },
      {
        id: 13, first_name: 'Hilde', last_name: 'Pierrepont', phone_number: '919-953-2267', favorite: true,
      },
      {
        id: 14, first_name: 'Dodi', last_name: 'Mc Faul', phone_number: '480-814-4221', favorite: false,
      },
      {
        id: 15, first_name: 'Staffard', last_name: 'Coope', phone_number: '466-410-5804', favorite: false,
      },
      {
        id: 16, first_name: 'Nicolas', last_name: 'Iddon', phone_number: '178-384-2250', favorite: false,
      },
      {
        id: 17, first_name: 'Dillie', last_name: 'Fonte', phone_number: '941-910-0884', favorite: false,
      },
      {
        id: 18, first_name: 'Ollie', last_name: 'Lount', phone_number: '148-672-2455', favorite: false,
      },
      {
        id: 19, first_name: 'Orran', last_name: 'Batham', phone_number: '788-811-9901', favorite: false,
      },
      {
        id: 20, first_name: 'Alexei', last_name: 'Fairpo', phone_number: '484-109-8684', favorite: true,
      },
      {
        id: 21, first_name: 'Loy', last_name: 'Kleinsmuntz', phone_number: '322-738-7510', favorite: false,
      },
      {
        id: 22, first_name: 'Clementia', last_name: 'Peasegood', phone_number: '212-949-8671', favorite: false,
      },
      {
        id: 23, first_name: 'Gillie', last_name: 'Denkel', phone_number: '899-397-4150', favorite: false,
      },
      {
        id: 24, first_name: 'Chet', last_name: 'Hatton', phone_number: '324-251-1812', favorite: false,
      },
      {
        id: 25, first_name: 'Inessa', last_name: 'Cocke', phone_number: '203-417-6284', favorite: false,
      },
      {
        id: 26, first_name: 'Alfons', last_name: 'Illsley', phone_number: '201-644-1565', favorite: false,
      },
      {
        id: 27, first_name: 'Vilhelmina', last_name: 'Lainge', phone_number: '277-527-7062', favorite: false,
      },
      {
        id: 28, first_name: 'Ernest', last_name: 'Boldison', phone_number: '258-282-1552', favorite: false,
      },
      {
        id: 29, first_name: 'Nicki', last_name: 'Fried', phone_number: '291-686-7274', favorite: false,
      },
      {
        id: 30, first_name: 'Olivette', last_name: 'Gilyatt', phone_number: '393-668-1472', favorite: false,
      },
      {
        id: 31, first_name: 'Barbabra', last_name: 'Gergely', phone_number: '310-960-0952', favorite: false,
      },
      {
        id: 32, first_name: 'Bronny', last_name: 'Haskins', phone_number: '287-291-2419', favorite: false,
      },
      {
        id: 33, first_name: 'Sybilla', last_name: 'Bussetti', phone_number: '104-863-0100', favorite: true,
      },
      {
        id: 34, first_name: 'Clemente', last_name: 'Webburn', phone_number: '851-494-2365', favorite: false,
      },
      {
        id: 35, first_name: 'Devy', last_name: 'de Mullett', phone_number: '815-154-3973', favorite: false,
      },
      {
        id: 36, first_name: 'Sterling', last_name: 'Winley', phone_number: '871-902-1812', favorite: false,
      },
      {
        id: 37, first_name: 'Winfield', last_name: 'Birchner', phone_number: '496-932-0828', favorite: false,
      },
      {
        id: 38, first_name: 'Rhiamon', last_name: 'Kondrat', phone_number: '313-426-8289', favorite: false,
      },
      {
        id: 39, first_name: 'Creighton', last_name: 'Gaythwaite', phone_number: '410-470-0735', favorite: false,
      },
      {
        id: 40, first_name: 'Fleurette', last_name: 'Kean', phone_number: '829-573-6111', favorite: false,
      },
      {
        id: 41, first_name: 'Onofredo', last_name: 'Vida', phone_number: '290-883-4899', favorite: false,
      },
      {
        id: 42, first_name: 'Nikki', last_name: 'Hutchens', phone_number: '951-631-4769', favorite: true,
      },
      {
        id: 43, first_name: 'Merrili', last_name: 'Newcome', phone_number: '924-206-1178', favorite: false,
      },
      {
        id: 44, first_name: 'Thea', last_name: 'Iozefovich', phone_number: '688-461-7715', favorite: false,
      },
      {
        id: 45, first_name: 'Killie', last_name: 'Dobing', phone_number: '373-792-5662', favorite: false,
      },
      {
        id: 46, first_name: 'Goddart', last_name: 'Broxap', phone_number: '381-107-1807', favorite: true,
      },
      {
        id: 47, first_name: 'Carlita', last_name: 'Godfray', phone_number: '639-856-6374', favorite: false,
      },
      {
        id: 48, first_name: 'Sharla', last_name: 'Wallwood', phone_number: '573-865-4680', favorite: false,
      },
      {
        id: 49, first_name: 'Raleigh', last_name: 'Say', phone_number: '444-656-6967', favorite: false,
      },
      {
        id: 50, first_name: 'Dalis', last_name: 'Attiwill', phone_number: '207-293-0348', favorite: false,
      },
      {
        id: 51, first_name: 'Johnnie', last_name: 'Renforth', phone_number: '202-102-1558', favorite: false,
      },
      {
        id: 52, first_name: 'Lynn', last_name: 'Kellar', phone_number: '647-338-7395', favorite: false,
      },
      {
        id: 53, first_name: 'Ainslee', last_name: 'Corwin', phone_number: '522-550-5925', favorite: false,
      },
      {
        id: 54, first_name: 'Cory', last_name: 'Hoyle', phone_number: '913-785-7076', favorite: false,
      },
      {
        id: 55, first_name: 'Delbert', last_name: 'Woodward', phone_number: '995-943-5166', favorite: false,
      },
      {
        id: 56, first_name: 'Myranda', last_name: 'Oxbrow', phone_number: '498-370-7583', favorite: false,
      },
      {
        id: 57, first_name: 'Faith', last_name: 'Shine', phone_number: '984-786-7548', favorite: false,
      },
      {
        id: 58, first_name: 'Lib', last_name: 'Boman', phone_number: '144-349-1242', favorite: false,
      },
      {
        id: 59, first_name: 'Catrina', last_name: 'Bullcock', phone_number: '956-719-1809', favorite: false,
      },
      {
        id: 60, first_name: 'Elianora', last_name: 'Hoyte', phone_number: '272-946-6840', favorite: true,
      },
      {
        id: 61, first_name: 'Valida', last_name: 'Clemencon', phone_number: '824-233-9449', favorite: false,
      },
      {
        id: 62, first_name: 'Gustavo', last_name: 'Altofts', phone_number: '576-562-3906', favorite: false,
      },
      {
        id: 63, first_name: 'Kassia', last_name: 'Faireclough', phone_number: '889-305-0643', favorite: false,
      },
      {
        id: 64, first_name: 'Elisabeth', last_name: 'Lettington', phone_number: '406-584-0949', favorite: false,
      },
      {
        id: 65, first_name: 'Joellen', last_name: 'Kimmitt', phone_number: '806-309-1828', favorite: false,
      },
      {
        id: 66, first_name: 'Millard', last_name: 'Goldes', phone_number: '134-121-7454', favorite: false,
      },
      {
        id: 67, first_name: 'Andromache', last_name: 'Balf', phone_number: '649-710-7468', favorite: false,
      },
      {
        id: 68, first_name: 'Reed', last_name: 'Kempster', phone_number: '210-148-6906', favorite: false,
      },
      {
        id: 69, first_name: 'Anthony', last_name: 'Restill', phone_number: '635-175-5867', favorite: false,
      },
      {
        id: 70, first_name: 'Rois', last_name: 'Buse', phone_number: '115-672-5299', favorite: false,
      },
      {
        id: 71, first_name: 'Hamid', last_name: 'Mullinger', phone_number: '818-346-8758', favorite: false,
      },
      {
        id: 72, first_name: 'Theodor', last_name: 'Coucher', phone_number: '865-278-1049', favorite: false,
      },
      {
        id: 73, first_name: 'Prince', last_name: 'Keeffe', phone_number: '913-492-8832', favorite: false,
      },
      {
        id: 74, first_name: 'Rosabella', last_name: 'Claibourn', phone_number: '280-899-8734', favorite: false,
      },
      {
        id: 75, first_name: 'Sherlocke', last_name: 'Nisbith', phone_number: '831-369-8589', favorite: false,
      },
      {
        id: 76, first_name: 'Delano', last_name: 'Brewis', phone_number: '237-820-0861', favorite: false,
      },
      {
        id: 77, first_name: 'Paddie', last_name: 'Lammerich', phone_number: '834-863-8641', favorite: false,
      },
      {
        id: 78, first_name: 'Jefferey', last_name: 'Tewes', phone_number: '443-786-1075', favorite: false,
      },
      {
        id: 79, first_name: 'Jeannine', last_name: 'Tipler', phone_number: '822-365-5156', favorite: false,
      },
      {
        id: 80, first_name: 'Nikolia', last_name: 'Gadson', phone_number: '647-460-2118', favorite: false,
      },
      {
        id: 81, first_name: 'Helen', last_name: 'Kilmister', phone_number: '283-240-2147', favorite: false,
      },
      {
        id: 82, first_name: 'Vonny', last_name: 'Tiplady', phone_number: '164-170-0441', favorite: false,
      },
      {
        id: 83, first_name: 'Cherye', last_name: 'Meeus', phone_number: '616-597-5749', favorite: false,
      },
      {
        id: 84, first_name: 'Elizabet', last_name: 'Rugieri', phone_number: '708-749-6983', favorite: false,
      },
      {
        id: 85, first_name: 'Emmie', last_name: 'Bunhill', phone_number: '868-352-1041', favorite: false,
      },
      {
        id: 86, first_name: 'Sindee', last_name: 'Prin', phone_number: '259-661-3896', favorite: false,
      },
      {
        id: 87, first_name: 'Timothee', last_name: "O'Cullinane", phone_number: '134-928-3425', favorite: false,
      },
      {
        id: 88, first_name: 'Yalonda', last_name: 'Benez', phone_number: '819-372-4713', favorite: false,
      },
      {
        id: 89, first_name: 'Norine', last_name: 'Zapata', phone_number: '449-269-3426', favorite: false,
      },
      {
        id: 90, first_name: 'Carry', last_name: 'Kauffman', phone_number: '999-631-2363', favorite: false,
      },
      {
        id: 91, first_name: 'Kerry', last_name: 'Darleston', phone_number: '602-647-8351', favorite: false,
      },
      {
        id: 92, first_name: 'Harley', last_name: 'Hadwin', phone_number: '247-956-2871', favorite: false,
      },
      {
        id: 93, first_name: 'Myles', last_name: 'Scrooby', phone_number: '688-387-3965', favorite: false,
      },
      {
        id: 94, first_name: 'Humfrey', last_name: 'Glancy', phone_number: '582-682-8884', favorite: false,
      },
      {
        id: 95, first_name: 'Katleen', last_name: 'Loukes', phone_number: '352-614-2932', favorite: false,
      },
      {
        id: 96, first_name: 'Boycie', last_name: 'Gubbins', phone_number: '887-305-7469', favorite: false,
      },
      {
        id: 97, first_name: 'Katharine', last_name: 'Bladon', phone_number: '424-584-3320', favorite: false,
      },
      {
        id: 98, first_name: 'Alice', last_name: 'Gawne', phone_number: '584-948-0087', favorite: false,
      },
      {
        id: 99, first_name: 'Deva', last_name: 'Christoforou', phone_number: '436-621-1378', favorite: false,
      },
      {
        id: 100, first_name: 'Gusella', last_name: 'Van den Hof', phone_number: '548-544-4095', favorite: false,
      }];
      return responseNoApi
/*      return axios.get('https://creaplus.free.beeceptor.com/persons')
        .then((response) => response.data).catch((error) => {
          console.log(error);
          return [];
        });*/
    },
  },
});
