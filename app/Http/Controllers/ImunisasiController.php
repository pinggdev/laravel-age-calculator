<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Imunisasi;

class ImunisasiController extends Controller
{
    public function index(Imunisasi $imunisasi) {
        return view('test', ['imunisasi' => $imunisasi]);
    }
}
