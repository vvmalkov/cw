export function renderRecordTable(container) {
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
                <tr>
                    <th scope="row">1</th>
                    <td>Dasha</td>
                    <td>150</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Masha</td>
                    <td>142</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Misha</td>
                    <td>138</td>
                </tr>
                <tr>
                    <th scope="row">4</th>
                    <td>Sasha</td>
                    <td>126</td>
                </tr>
                <tr>
                    <th scope="row">5</th>
                    <td>Pasha</td>
                    <td>115</td>
                </tr>
            </tbody>
        </table>
    </div>
  `;
};