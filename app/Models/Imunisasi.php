<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Imunisasi extends Model
{
    public function hitungBMI($berat_badan, $tinggi_badan) {
        $bmi = $berat_badan / (($tinggi_badan / 100) * ($tinggi_badan / 100));
        if ($bmi <= 18.4) {
            return "Berat Badan Kurang";
        } elseif ($bmi >= 18.5 && $bmi <= 24.9) {
            return "Berat Badan Ideal";
        } elseif ($bmi >= 25 && $bmi <= 29.9) {
            return "Berat Badan Lebih";
        } elseif ($bmi >= 30 && $bmi <= 39.9) {
            return "Gemuk";
        } elseif ($bmi >= 40) {
            return "Sangat Gemuk";
        }
    }
}
