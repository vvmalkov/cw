import { getRecords } from "./api";

export async function fetchRecord() {
    try {
        const records = await getRecords();
        console.log(records,"!")
        return records;
    } catch (error) {
        console.log(`error: ${error}`);
        //return [];
    }
}

export async function renderRecordTable(container) {
    const records = await fetchRecord();
    //const records = (await fetchRecord()) || [];
    container.innerHTML = `<div class="card p-4 shadow-sm w-50 mx-auto mt-5">
        <h2 class="mb-3 text-center">Record table</h2>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Username</th>
                    <th scope="col">Score</th>
                </tr>
            </thead>
            <tbody>
                ${(records || []).map((record, index) => `
                    <tr>
                        <th scope="row">${index + 1}</th>
                        <td>${record.name}</td>
                        <td>${record.score}</td>
                    </tr>
                `)}
            </tbody>
        </table>
    </div>
  `;
};