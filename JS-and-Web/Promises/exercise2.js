//Exercise 2
function processFile(filename, processingTime) {
  return new Promise((resolve, reject) => {
    console.log(`Starting to process ${filename}...`);
    
    setTimeout(() => {
      // 15% chance of failure for realistic simulation
      if (Math.random() < 0.15) {
        reject(new Error(`Failed to process ${filename}`));
      } else {
        const result = {
          filename: filename,
          size: Math.floor(Math.random() * 1000) + 100, // Random size
          processedAt: new Date().toLocaleTimeString()
        };
        console.log(`✓ Completed ${filename}`);
        resolve(result);
      }
    }, processingTime);
  });
}

// TODO: Use Promise.all() to process these files concurrently:
const files = [
  { name: "document1.pdf", time: 2000 },
  { name: "image1.jpg", time: 1500 },
  { name: "data.csv", time: 3000 },
  { name: "report.docx", time: 1000 }
];

// TODO: 
// 1. Create an array of promises using the files array
// 2. Use Promise.all() to wait for all files to complete
// 3. Log total processing time and all results
// 4. Handle the case where any file fails

// Bonus: Try Promise.allSettled() to see results even if some files fail

let promises = [];
let i=0;
for(const file in files){
    const promise = processFile(file.name,files.time);
    promises[i]=promise;
    i++;
}
const startTime = Date.now();

// Promise.all(promises).then( results => {
//     const totalTime = Date.now() - startTime;
//     console.log(`All files processed in ${totalTime} ms`);
//     console.log("Results:", results)}).catch(error => {
//     console.error("Error processing files:", error.message)});

Promise.allSettled(promises)
  .then(results => {
    results.forEach((result, idx) => {
      if (result.status === "fulfilled") {
        console.log(`File ${files[idx].name} processed successfully:`, result.value);
      } else {
        console.log(`File ${files[idx].name} failed:`, result.reason.message);
      }
    });
  });
