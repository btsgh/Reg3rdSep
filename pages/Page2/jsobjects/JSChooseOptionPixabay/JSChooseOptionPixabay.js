export default {
 getdatabyImage() {
 const data1 = SearchImagePixabay.data.hits;
 return data1;
 },
 getdatabyVideo() {
 const data2 = SearchVideoPixabay.data.hits;
 return data2;
 },
 getFilteredData() {
 let filteredData;

 if (Select1.selectedOptionValue === "Images") {
 filteredData = this.getdatabyImage();
 } else if (Select1.selectedOptionValue === "Videos") {
 filteredData = this.getdatabyVideo();
 } else {
 filteredData = [
 ...this.getdatabyImage(),
 ...this.getdatabyVideo()
 ];
 }
 return filteredData;
 }
}