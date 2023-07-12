import React, { useEffect, useState } from 'react';
import books from '../books.json'
import DataTable from 'react-data-table-component'

function BooksTable() {
  const [goodbooks, setGoodBooks] = useState(books);
  const [records, setRecords] = useState([]);

  const columns = [
    {
        name: 'Authur',
        selector:  (row) => row.author,
        sortable: true,
        width: "12rem"
    },
    {
        name: 'Country',
        selector:  (row) => row.country,
        sortable: true,
        width: "12rem"
    },
    {
        name: 'Image',
        // selector:  (row) => row.imageLink,
        // cell: (row) => <img style={{ width: 'auto', height: '12rem' , padding: '1rem'}} src={row.imageLink} alt={row.imageLink} />,
        cell: (row) => <img className="imagezoom"  src={row.imageLink} alt={row.imageLink} />,
        sortable: true,
        width: "12rem"
    },
    {
        name: 'Language',
        selector:  (row) => row.language,
        sortable: true,
        width: "10rem"
    },
    {
        name: 'Pages',
        selector:  (row) => row.pages,
        sortable: true,
        width: '8rem'
    },
    {
        name: 'Title',
        selector:  (row) => row.title,
        sortable: true,
      
    },
    {
        name: 'Year',
        selector:  (row) => row.year,
        sortable: true,
        width: "8rem"
    },
  ]

  const customStyles = {
    headCells : {
      style: {
        border: '1px solid black',

      },
        },
    cells : {
      style: {
        border: '1px solid black'
      },
    },
}

  useEffect(() => {
    const data = goodbooks.map((goodbook) => {
      if (goodbook != '') {
        return {
            author : goodbook.author,
            country : goodbook.country,
            imageLink : goodbook.imageLink,
            language : goodbook.language,
            pages : goodbook.pages,
            title : goodbook.title,
            year : goodbook.year,
        }
      } else {
        return {
          author : goodbook.author,
          country : goodbook.country,
          imageLink : <img style={{width : 'auto' , height:"8rem"}} src={goodbook.imageLink} alt={goodbook.imageLink}/>,
          language : goodbook.language,
          pages : goodbook.pages,
          title : goodbook.title,
          year : goodbook.year,
      }
    }
    })
    setRecords(data);
  }, [goodbooks])

// const handleFilter = (e) => {
//     const searchText = e.target.value.toLowerCase();
    
//     if (searchText === '') {
//         setGoodBooks(books);
      
//     } else {
//       const newData = records.filter(row => {

//         for (let key in row) {
//           if (row[key] && row[key].toString().toLowerCase().includes(searchText)) {
//             return true; 
//           }
//         }
//         return false;
//         })

  
//         setGoodBooks(newData);
//     }
//   };

const handleFilter = (e) => {
  const searchText = e.target.value.toLowerCase();

  if (searchText === '') {
    setRecords(books);
  } else {
    const newData = books.filter((row) => {
      for (let key in row) {
        if (
          row[key] &&
          row[key].toString().toLowerCase().includes(searchText)
        ) {
          return true;
        }
      }
      return false;
    });

    setRecords(newData);
  }
};


//   const changeBookPage = (e) => {
//     const selectedValue = e.target.value;
  
//     // Perform the logic based on the selected value
//     if (selectedValue === '0-100') {
//       const newData = books.filter((book) => book.pages <= 100);
//       setGoodBooks(newData);
//     } 
//     else if (selectedValue === '101-200') {
//         const newData = books.filter((book) => book.pages >= 101 && book.pages <= 200
//         );
//         setGoodBooks(newData);
//       } 
//     else if (selectedValue === '100-200') {
//         const newData = books.filter((book) => book.pages >= 201 && book.pages <= 300
//         );
//         setGoodBooks(newData);
//       } 
//     else if (selectedValue === '201-300') {
//         const newData = books.filter((book) => book.pages >= 301 && book.pages <= 400
//         );
//         setGoodBooks(newData);
//       } 
//     else if (selectedValue === '301-400') {
//         const newData = books.filter((book) => book.pages >= 401 && book.pages <= 500
//         );
//         setGoodBooks(newData);
//       } 
//     else if (selectedValue === '401-500') {
//         const newData = books.filter((book) => book.pages >= 501 && book.pages <= 600
//         );
//         setGoodBooks(newData);
//       } 
//     else if (selectedValue === '501-600') {
//         const newData = books.filter((book) => book.pages >= 601 && book.pages <= 700
//         );
//         setGoodBooks(newData);
//       } 
//     else if (selectedValue === '601-700') {
//         const newData = books.filter((book) => book.pages >= 601 && book.pages <= 700
//         );
//         setGoodBooks(newData);
//       } 
//     else if (selectedValue === '701-800') {
//         const newData = books.filter((book) => book.pages >= 701 && book.pages <= 800
//         );
//         setGoodBooks(newData);
//       } 
    
//     else if (selectedValue === '801-900') {
//         const newData = books.filter((book) => book.pages >= 801 && book.pages <= 900
//         );
//         setGoodBooks(newData);
//       } 
    
//     else if (selectedValue === '901-1000') {
//         const newData = books.filter((book) => book.pages >= 901 && book.pages <= 1000
//         );
//         setGoodBooks(newData);
//       } 
//     else if (selectedValue === '1001-1100') {
//         const newData = books.filter((book) => book.pages >= 1001 && book.pages <= 1100
//         );
//         setGoodBooks(newData);
//       } 
 
    
    
//     else {
 
//       setGoodBooks(books);
//     }
//   };

//   const changeCentury = (e) =>{
//     const selectedValue = e.target.value;

//     if (selectedValue === '1') {
//         const newData = books.filter((book) => book.year >= 0 && book.year <= 99);
//         setGoodBooks(newData);
//       } 
//     else if (selectedValue === '2') {
//         const newData = books.filter((book) => book.year >= 100 && book.year <= 199
//           );
//         setGoodBooks(newData);
//         } 
//     else if (selectedValue === '3') {
//         const newData = books.filter((book) => book.year >= 200 && book.year <= 299
//           );
//         setGoodBooks(newData);
//         } 
//     else if (selectedValue === '4') {
//         const newData = books.filter((book) => book.year >= 300 && book.year <= 399
//           );
//         setGoodBooks(newData);
//         } 
//     else if (selectedValue === '5') {
//         const newData = books.filter((book) => book.year >= 400 && book.year <= 499
//           );
//         setGoodBooks(newData);
//         } 
//     else if (selectedValue === '6') {
//         const newData = books.filter((book) => book.year >= 500 && book.year <= 599
//           );
//         setGoodBooks(newData);
//         } 
//     else if (selectedValue === '7') {
//         const newData = books.filter((book) => book.year >= 600 && book.year <= 699
//           );
//         setGoodBooks(newData);
//         } 
//     else if (selectedValue === '8') {
//         const newData = books.filter((book) => book.year >= 700 && book.year <= 799
//           );
//         setGoodBooks(newData);
//         } 
//     else if (selectedValue === '9') {
//         const newData = books.filter((book) => book.year >= 800 && book.year <= 899
//           );
//         setGoodBooks(newData);
//         } 
//     else if (selectedValue === '10') {
//         const newData = books.filter((book) => book.year >= 900 && book.year <= 999
//           );
//         setGoodBooks(newData);
//         } 
//     else if (selectedValue === '11') {
//         const newData = books.filter((book) => book.year >= 1000 && book.year <= 1099
//           );
//         setGoodBooks(newData);
//         } 
//     else if (selectedValue === '12') {
//         const newData = books.filter((book) => book.year >= 1100 && book.year <= 1199
//           );
//         setGoodBooks(newData);
//         } 
//     else if (selectedValue === '13') {
//         const newData = books.filter((book) => book.year >= 1200 && book.year <= 1299
//           );
//         setGoodBooks(newData);
//         } 
//     else if (selectedValue === '14') {
//         const newData = books.filter((book) => book.year >= 1300 && book.year <= 1399
//           );
//         setGoodBooks(newData);
//         } 
//     else if (selectedValue === '15') {
//         const newData = books.filter((book) => book.year >= 1400 && book.year <= 1499
//           );
//         setGoodBooks(newData);
//         } 
//     else if (selectedValue === '16') {
//         const newData = books.filter((book) => book.year >= 1500 && book.year <= 1599
//           );
//         setGoodBooks(newData);
//         } 
//     else if (selectedValue === '17') {
//         const newData = books.filter((book) => book.year >= 1600 && book.year <= 1699
//           );
//         setGoodBooks(newData);
//         } 
//     else if (selectedValue === '18') {
//         const newData = books.filter((book) => book.year >= 1700 && book.year <= 1799
//           );
//         setGoodBooks(newData);
//         } 
//     else if (selectedValue === '19') {
//         const newData = books.filter((book) => book.year >= 1800 && book.year <= 1899
//           );
//         setGoodBooks(newData);
//         } 
//     else if (selectedValue === '20') {
//         const newData = books.filter((book) => book.year >= 1900 && book.year <= 1999
//           );
//         setGoodBooks(newData);
//         } 
//     else if (selectedValue === '21') {
//         const newData = books.filter((book) => book.year >= 2000 && book.year <= 2100
//           );
//         setGoodBooks(newData);
//         } 
  
//     else {

//     setGoodBooks(books);
//   }
// };

// const applyFilters = () => {
//   const selectedPages = document.getElementById('pagesFilter').value;
//   const selectedYear = document.getElementById('yearFilter').value;

//   let filteredBooks = books;

//   if (selectedPages !== '') {
//     const [minPages, maxPages] = selectedPages.split('-');
//     filteredBooks = filteredBooks.filter(
//       (book) => book.pages >= minPages && book.pages <= maxPages
//     );
//   }

//   if (selectedYear !== '') {
//     const [minYear, maxYear] = selectedYear.split('-');
//     if (selectedYear === '-2000 - 0') {
//       filteredBooks = filteredBooks.filter((book) => book.year < 0);
//     } else {
//       filteredBooks = filteredBooks.filter(
//         (book) => book.year >= minYear && book.year <= maxYear
//       );
//     }
//   }

//   setGoodBooks(filteredBooks);
// };

const applyFilters = () => {
  const selectedPages = document.getElementById('pagesFilter').value;
  const selectedYear = document.getElementById('yearFilter').value;

  let filteredBooks = books;

  if (selectedPages !== '') {
    const [minPages, maxPages] = selectedPages.split('-');
    filteredBooks = filteredBooks.filter(
      (book) => book.pages >= minPages && book.pages <= maxPages
    );
  }

  if (selectedYear !== '') {
    const [minYear, maxYear] = selectedYear.split('-');
    if (selectedYear === '-2000 - 0') {
      filteredBooks = filteredBooks.filter((book) => book.year < 0);
    } else {
      filteredBooks = filteredBooks.filter(
        (book) => book.year >= minYear && book.year <= maxYear
      );
    }
  }

  setRecords(filteredBooks); // Update the state variable to store filtered books
};
  return (
    <div className="mt-3 row justify-content-center">
      <h1 className="row justify-content-center mt-3 pb-3">Book List</h1>

        {/* <div className="col d-flex justify-content-around"> */}
        <div className="col-md-11">
          <div className="row justify-content-around mb-3">
            <div className="col-sm-3">
              <select id="pagesFilter" onChange={applyFilters} className="w-100" style={{ maxWidth: "100%" }}>
                <option value="">------</option>
                <option value="0-100">0 - 100 pages</option>
                <option value="101-200">101 - 200 pages</option>
                <option value="201-300">201 - 300 pages</option>
                <option value="301-400">301 - 400 pages</option>
                <option value="401-500">401 - 500 pages</option>
                <option value="501-600">501 - 600 pages</option>
                <option value="601-700">601 - 700 pages</option>
                <option value="701-800">701 - 800 pages</option>
                <option value="801-900">801 - 900 pages</option>
                <option value="901-1000">901 - 1000 pages</option>
                <option value="1001-1100">1001 - 1100 pages</option>
              </select>
            </div>
            <div className="col-sm-3">
              <select id="yearFilter" onChange={applyFilters} className="w-100" style={{ maxWidth: "100%" }}>
                <option value="">------</option>
                <option value="-2000 - 0">Before 0CE</option>
                <option value="1-100">1st Century</option>
                <option value="101-200">2nd Century</option>
                <option value="201-300">3rd Century</option>
                <option value="301-400">4th Century</option>
                <option value="401-500">5th Century</option>
                <option value="501-600">6th Century</option>
                <option value="601-700">7th Century</option>
                <option value="701-800">8th Century</option>
                <option value="801-900">9th Century</option>
                <option value="901-1000">10th Century</option>
                <option value="1001-1100">11th Century</option>
                <option value="1101-1200">12th Century</option>
                <option value="1201-1300">13th Century</option>
                <option value="1301-1400">14th Century</option>
                <option value="1401-1500">15th Century</option>
                <option value="1501-1600">16th Century</option>
                <option value="1601-1700">17th Century</option>
                <option value="1701-1800">18th Century</option>
                <option value="1801-1900">19th Century</option>
                <option value="1901-2000">20th Century</option>
                <option value="2001-2100">21st Century</option>
              </select>
            </div>

            <div className="col-sm-3">
                <input type="text" onChange={handleFilter} placeholder='Search Here' className="w-100" style={{maxWidth: "100%"}}/>
            </div>
            </div>
        </div>
      <div className="table-container mt-3 col-md-11">
        <DataTable 
            customStyles={customStyles}
            columns={columns}
            data={records}
            selectableRows
            fixedHeader
            pagination
        >

        </DataTable>
      </div>
        

    </div>
  );
}

export default BooksTable;