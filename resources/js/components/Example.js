import React, { useState } from "react";
import ReactDOM from "react-dom";

import DatePicker from "react-date-picker";

function Example() {
    const [date, setDate] = useState(new Date());
    const [gender, setGender] = useState();
    const [submit, setSubmit] = useState();
    const month = [
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

    const clickHandler = (e) => {
        setSubmit(date);
        console.log(gender);
        e.preventDefault();
    };

    const dateTime = new Date(date.getTime());

    const jadwal = [
        {
            usia: "0 Bulan (Baru Lahir)",
            tanggal: `${dateTime.getDate()} / ${
                month[dateTime.getMonth()]
            } / ${dateTime.getFullYear()}`,
        },
        {
            usia: "1 Bulan",
            tanggal: `${new Date(date.getTime() + 2592000000).getDate()} / ${
                month[new Date(date.getTime() + 2592000000).getMonth()]
            } / ${new Date(date.getTime() + 2592000000).getFullYear()}`,
        },
        {
            usia: "2 Bulan",
            tanggal: `${new Date(
                date.getTime() + 2592000000 * 2
            ).getDate()} / ${
                month[new Date(date.getTime() + 2592000000 * 2).getMonth()]
            } / ${new Date(date.getTime() + 2592000000 * 2).getFullYear()} `,
        },
        {
            usia: "3 Bulan",
            tanggal: `${new Date(
                date.getTime() + 2592000000 * 3
            ).getDate()} / ${
                month[new Date(date.getTime() + 2592000000 * 3).getMonth()]
            } / ${new Date(date.getTime() + 2592000000 * 3).getFullYear()} `,
        },
        {
            usia: "4 Bulan",
            tanggal: `${new Date(
                date.getTime() + 2592000000 * 3 + 1728000000
            ).getDate()} / ${
                month[
                    new Date(
                        date.getTime() + 2592000000 * 3 + 1728000000
                    ).getMonth()
                ]
            } / ${new Date(
                date.getTime() + 2592000000 * 3 + 1728000000
            ).getFullYear()} `,
        },
        {
            usia: "9 Bulan",
            tanggal: `${new Date(
                date.getTime() + 2592000000 * 3 + 1728000000 + 13824000000
            ).getDate()} / ${
                month[
                    new Date(
                        date.getTime() +
                            2592000000 * 3 +
                            1728000000 +
                            13824000000
                    ).getMonth()
                ]
            } / ${new Date(
                date.getTime() + 2592000000 * 3 + 1728000000 + 13824000000
            ).getFullYear()} `,
        },
    ];

    return (
        <div>
            <h2 className="text-white">Jadwal Imunisasi</h2>
            <div>
                <label>Jenis Kelamin</label>
                <select
                    defaultValue={"default"}
                    onChange={(e) => {
                        setGender(e.target.value);
                    }}
                >
                    <option value={"default"} disabled>
                        Pilih
                    </option>
                    <option value="lakilaki">Laki-Laki</option>
                    <option value="perempuan">Perempuan</option>
                </select>
            </div>
            <div>
                <label>Tanggal Lahir</label>
                <DatePicker
                    onChange={setDate}
                    value={date}
                    clearIcon={null}
                    format="dd-MM-y"
                />
            </div>
            <button onClick={clickHandler}>Submit</button>
            {submit && (
                    <p>
                        Jenis Kelamin{" "}
                        {gender === "lakilaki" ? "Laki-Laki" : "Perempuan"}
                    </p>
                ) &&
                jadwal.map((item, index) => (
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
