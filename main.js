function UpdateRecentFiles(FileNames) {
   var RecentFileNames = [],
      a$2 = 0;
   var RecentItem = null,
      a$1 = 0;
   var FileName = "",
      ListElement = null,
      LinkElement = null,
      ImageElement = null;
   RecentFileNames = FileNames;
   var $temp1;
   for(a$2=0,$temp1=RecentItems.length;a$2<$temp1;a$2++) {
      RecentItem = RecentItems[a$2];
      Container.removeChild(RecentItem);
   }
   var $temp2;
   for(a$1=0,$temp2=FileNames.length;a$1<$temp2;a$1++) {
      FileName = FileNames[a$1];
      ListElement = document.createElement("li");
      LinkElement = document.createElement("a");
      LinkElement.href = "#";
      LinkElement.appendChild(document.createTextNode(FileName));
      LinkElement.addEventListener("click",function () {
         var ItemFileName = "";
         ItemFileName = this.textContent
         HostApplication.LoadProject(ItemFileName);
      },false);
      ImageElement = document.createElement("img");
      ImageElement.src = "Images\/OpenProject.png";
      ListElement.appendChild(ImageElement);
      ListElement.appendChild(LinkElement);
      Container.appendChild(ListElement);
      RecentItems.push(ListElement);
   }
};
UpdateRecentFiles = UpdateRecentFiles;
var Container = null,
   RecentItems = [];
Container = document.getElementById("RecentList");

