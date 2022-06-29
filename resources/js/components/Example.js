import React, { useState } from "react";
import ReactDOM from "react-dom";

import DatePicker from "react-date-picker";

function Example() {
    const [value, setValue] = useState(new Date());
    var bulan = [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember",
    ];

    const dateTime = new Date(value.getTime());

    const jadwal = [
        {
            usia: "0 Bulan (Baru Lahir)",
            tanggal: `${dateTime.getDate()} / ${
                bulan[dateTime.getMonth()]
            } / ${dateTime.getFullYear()}`,
        },
        {
            usia: "1 Bulan",
            tanggal: `${new Date(value.getTime() + 2592000000).getDate()} / ${
                bulan[new Date(value.getTime() + 2592000000).getMonth()]
            } / ${new Date(value.getTime() + 2592000000).getFullYear()}`,
        },
        {
            usia: "2 Bulan",
            tanggal: `${new Date(
                value.getTime() + 2592000000 * 2
            ).getDate()} / ${
                bulan[new Date(value.getTime() + 2592000000 * 2).getMonth()]
            } / ${new Date(value.getTime() + 2592000000 * 2).getFullYear()} `,
        },
        {
            usia: "3 Bulan",
            tanggal: `${new Date(
                value.getTime() + 2592000000 * 3
            ).getDate()} / ${
                bulan[new Date(value.getTime() + 2592000000 * 3).getMonth()]
            } / ${new Date(value.getTime() + 2592000000 * 3).getFullYear()} `,
        },
        {
            usia: "4 Bulan",
            tanggal: `${new Date(
                value.getTime() + 2592000000 * 3 + 1728000000
            ).getDate()} / ${
                bulan[
                    new Date(
                        value.getTime() + 2592000000 * 3 + 1728000000
                    ).getMonth()
                ]
            } / ${new Date(
                value.getTime() + 2592000000 * 3 + 1728000000
            ).getFullYear()} `,
        },
        {
            usia: "9 Bulan",
            tanggal: `${new Date(
                value.getTime() + 2592000000 * 3 + 1728000000 + 13824000000
            ).getDate()} / ${
                bulan[
                    new Date(
                        value.getTime() +
                            2592000000 * 3 +
                            1728000000 +
                            13824000000
                    ).getMonth()
                ]
            } / ${new Date(
                value.getTime() + 2592000000 * 3 + 1728000000 + 13824000000
            ).getFullYear()} `,
        },
    ];

    return (
        <div>
            <DatePicker onChange={setValue} value={value} />
            {jadwal.map((item, index) => (
                <div key={index}>
                    <p>
                        {item.usia} - {item.tanggal}
                    </p>
                </div>
            ))}
        </div>
    );
}
export default Example;

if (document.getElementById("example")) {
    ReactDOM.render(<Example />, document.getElementById("example"));
}
