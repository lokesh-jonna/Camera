let request = indexedDB.open("camera", 1);
let db;

request.onsuccess = function () {
    db = request.result;
}
request.onerror = function (err) {
    console.log(err)
}
request.onupgradeneeded = function () {
    db = request.result;
    db.createObjectStore("images", { keyPath: "mid" });
    db.createObjectStore("videos", { keyPath: "mid" });
}
