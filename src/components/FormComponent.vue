<script>
import useValidate from "@vuelidate/core";
import { required, alpha, alphaNum, numeric, helpers, maxLength, minLength, minValue } from "@vuelidate/validators";

const checkedTerms = (value) => value === true

export default {
    data () {
        return {
            v$: useValidate(),
            form: {
                nama: '',
                nik: null,
                noKk: null,
                fotoKtp: null,
                fotoKk: null,
                umur: null,
                jenisKelamin: '',
                alamat: '',
                rt: '',
                rw: '',
                penghasilanSebelum: null,
                penghasilanSetelah: null,
                alasan: '',
            },
            lainnya: false,
            checked: false
        }
    },
    methods: {
        onChange(e) {
            this.form.fotoKtp = this.$refs.ktp.files[0]
            this.form.fotoKk = this.$refs.kk.files[0]
    },
        submitForm() {
            this.v$.$validate()
            if (!this.v$.$error && this.checked === true) { 
                alert('Form successfully submitted.')
                console.log(this.form)
                } else {
                    alert('Form failed validation')
                }
        }
    },
    validations() {
        return {
            form: {
                nama: { 
                    required: helpers.withMessage('Nama wajib diisi', required), 
                    },
                nik: { 
                    required: helpers.withMessage('NIK wajib diisi', required), 
                    maxLength: helpers.withMessage('NIK harus terdiri dari 16 digit', maxLength(16)), 
                    minLength: helpers.withMessage('NIK harus terdiri dari 16 digit', minLength(16)),
                    numeric 
                    },
                noKk: { 
                    required: helpers.withMessage('No. KK wajib diisi', required),
                    numeric 
                    },
                fotoKtp: { 
                    required 
                    },
                fotoKk: { 
                    required 
                    },
                umur: { 
                    required: helpers.withMessage('Umur wajib diisi', required), 
                    minValue: helpers.withMessage('Umur penerima minimal 25 tahun', minValue(25)) 
                    },
                jenisKelamin: { 
                    required: helpers.withMessage('Jenis Kelamin wajib dipilih', required), 
                    },
                alamat: { 
                    required: helpers.withMessage('Alamat wajib diisi', required), 
                    maxLength: helpers.withMessage('Alamat maksimal 255 karakter', maxLength(255)), 
                    },
                rt: { 
                    required: helpers.withMessage('RT wajib diisi', required), 
                    },
                rw: { 
                    required: helpers.withMessage('RW wajib diisi', required), 
                    },
                penghasilanSebelum: { 
                    required: helpers.withMessage('Penghasilan wajib diisi', required), 
                    numeric 
                    },
                penghasilanSetelah: { 
                    required: helpers.withMessage('Penghasilan wajib diisi', required), 
                    numeric 
                    },
                alasan: { 
                    required: helpers.withMessage('Alasan wajib dipilih', required), 
                    },
            },
            checked: { required, checkedTerms: helpers.withMessage('*Wajib di centang', checkedTerms) }
        };
    },
}
</script>

<template>
    <section class="max-w-4xl p-6 my-8 mx-auto bg-white rounded-md shadow-md">
        <h4 class="text-3xl font-semibold text-black capitalize">Isi Formulir</h4>
        
        <form @submit.prevent="submitForm">
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                    <label 
                    class="text-grey-800" 
                    :class="{'text-warning-700' : v$.form.nama.$error}" 
                    for="nama_lengkap">Nama Lengkap</label>
                    <input 
                    v-model="form.nama" 
                    id="nama_lengkap" 
                    type="text" 
                    placeholder="Masukkan nama lengkap" 
                    class="form-input" 
                    :class="{'form-input-error' : v$.form.nama.$error}">
                    <span 
                    class="text-warning-700 mt-2 block text-sm" 
                    v-if="v$.form.nama.$error">
                        {{ v$.form.nama.$errors[0].$message }}
                    </span>
                </div>

                <div>
                    <label 
                    class="text-grey-800" 
                    :class="{'text-warning-700' : v$.form.nik.$error}" 
                    for="nik">NIK</label>
                    <input 
                    v-model="form.nik" 
                    id="nik" 
                    type="number" 
                    placeholder="Masukkan 16 digit NIK" 
                    class="form-input" 
                    :class="{'form-input-error' : v$.form.nik.$error}">
                    <span 
                    class="text-warning-700 mt-2 block text-sm" 
                    v-if="v$.form.nik.$error">
                        {{ v$.form.nik.$errors[0].$message }}
                    </span>
                </div>

                <div>
                    <label 
                    class="text-grey-800" 
                    :class="{'text-warning-700' : v$.form.noKk.$error}" 
                    for="kartu_keluarga">No. Kartu Keluarga</label>
                    <input 
                    v-model="form.noKk" 
                    id="kartu_keluarga" 
                    type="number" 
                    placeholder="Masukkan 16 digit Kartu Keluarga" 
                    class="form-input" 
                    :class="{'form-input-error' : v$.form.noKk.$error}">
                    <span 
                    class="text-warning-700 mt-2 block text-sm" 
                    v-if="v$.form.noKk.$error">
                        {{ v$.form.noKk.$errors[0].$message }}
                    </span>
                </div>

                <div>
                    <label 
                    class="text-grey-800" 
                    :class="{'text-warning-700' : v$.form.fotoKtp.$error}" 
                    for="foto_ktp">Foto KTP</label>
                    <input 
                    id="foto_ktp" 
                    type="file" 
                    ref="ktp" 
                    accept=".jpg, .jpeg, .png, .bmp" 
                    @change="onChange" 
                    class="form-input" 
                    :class="{'form-input-error' : v$.form.fotoKtp.$error}">
                    <span 
                    class="text-warning-700 mt-2 block text-sm" 
                    v-if="v$.form.fotoKtp.$error">
                        {{ v$.form.fotoKtp.$errors[0].$message }}
                    </span>
                </div>

                <div>
                    <label 
                    class="text-grey-800" 
                    :class="{'text-warning-700' : v$.form.fotoKk.$error}" 
                    for="foto_kk">Foto Kartu Keluarga</label>
                    <input 
                    id="foto_kk" 
                    type="file" 
                    ref="kk" 
                    accept=".jpg, .jpeg, .png, .bmp" 
                    @change="onChange" class="form-input" 
                    :class="{'form-input-error' : v$.form.fotoKk.$error}">
                    <span 
                    class="text-warning-700 mt-2 block text-sm" 
                    v-if="v$.form.fotoKk.$error">
                        {{ v$.form.fotoKk.$errors[0].$message }}
                    </span>
                </div>

                <div>
                    <label 
                    class="text-grey-800" 
                    :class="{'text-warning-700' : v$.form.umur.$error}" 
                    for="umur">Umur</label>
                    <input 
                    v-model="form.umur" 
                    id="umur" 
                    type="number" 
                    placeholder="Masukkan umur" 
                    class="form-input" 
                    :class="{'form-input-error' : v$.form.umur.$error}">
                    <span 
                    class="text-warning-700 mt-2 block text-sm" 
                    v-if="v$.form.umur.$error">
                        {{ v$.form.umur.$errors[0].$message }}
                    </span>
                </div>

                <div>
                    <label 
                    class="text-grey-800 block" 
                    :class="{'text-warning-700' : v$.form.jenisKelamin.$error}">
                    Jenis Kelamin
                    </label>
                    <label 
                    class="text-grey-700 text-sm mt-1 block">
                    Pilih Salah Satu
                    </label>
                    <span 
                    class="text-warning-700 text-sm mt-1" 
                    v-if="v$.form.jenisKelamin.$error">
                        {{ v$.form.jenisKelamin.$errors[0].$message }}
                    </span>
                    <div class="mt-2 flex">
                        <input 
                        type="radio" 
                        name="jenis_kelamin" 
                        id="laki-laki" 
                        value="Laki-Laki" 
                        v-model="form.jenisKelamin" 
                        class="flex h-[22px] bg-white border border-grey-400 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring">
                        <label 
                        class="ml-1 text-grey-800" 
                        for="laki-laki">
                        Laki-Laki
                        </label>
                        <input 
                        type="radio" 
                        name="jenis_kelamin" 
                        id="perempuan" 
                        value="Perempuan" 
                        v-model="form.jenisKelamin" 
                        class="flex h-[22px] ml-4 bg-white border border-grey-400 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring">
                        <label 
                        class="ml-1 text-grey-800" 
                        for="perempuan">
                        Perempuan
                        </label>
                    </div>
                </div>

                <div>
                    <label 
                    class="text-grey-800" 
                    :class="{'text-warning-700' : v$.form.alamat.$error}">
                    Alamat
                    </label>
                    <textarea 
                    v-model="form.alamat" 
                    placeholder="Masukkan alamat" 
                    class="form-input h-48" 
                    :class="{'form-input-error' : v$.form.alamat.$error}">
                    </textarea>
                    <span 
                    class="text-warning-700 mt-2 block text-sm" 
                    v-if="v$.form.alamat.$error">
                        {{ v$.form.alamat.$errors[0].$message }}
                    </span>
                </div>

                <div>
                    <label 
                    class="text-grey-800" 
                    :class="{'text-warning-700' : v$.form.rt.$error}" 
                    for="rt">
                    RT
                    </label>
                    <input 
                    v-model="form.rt" 
                    id="rt" 
                    placeholder="Masukkan RT" 
                    type="text" 
                    class="form-input" 
                    :class="{'form-input-error' : v$.form.rt.$error}">
                    <span 
                    class="text-warning-700 mt-2 block text-sm" 
                    v-if="v$.form.rt.$error">
                        {{ v$.form.rt.$errors[0].$message }}
                    </span>
                </div>

                <div>
                    <label 
                    class="text-grey-800" 
                    :class="{'text-warning-700' : v$.form.rw.$error}" 
                    for="rw">
                    RW
                    </label>
                    <input 
                    v-model="form.rw" 
                    id="rw" 
                    placeholder="Masukkan RW" 
                    type="text" 
                    class="form-input" 
                    :class="{'form-input-error' : v$.form.rw.$error}">
                    <span 
                    class="text-warning-700 mt-2 block text-sm" 
                    v-if="v$.form.rw.$error">
                        {{ v$.form.rw.$errors[0].$message }}
                    </span>
                </div>

                <div>
                    <label 
                    class="text-grey-800" 
                    :class="{'text-warning-700' : v$.form.penghasilanSebelum.$error}" 
                    for="penghasilan_sebelum">
                    Penghasilan sebelum pandemi
                    </label>
                    <input 
                    v-model="form.penghasilanSebelum" 
                    id="penghasilan_sebelum" 
                    placeholder="Masukkan penghasilan sebelum pandemi" 
                    type="number" class="form-input" 
                    :class="{'form-input-error' : v$.form.penghasilanSebelum.$error}">
                    <span 
                    class="text-warning-700 mt-2 block text-sm" 
                    v-if="v$.form.penghasilanSebelum.$error">
                        {{ v$.form.penghasilanSebelum.$errors[0].$message }}
                    </span>
                </div>

                <div>
                    <label 
                    class="text-grey-800" 
                    :class="{'text-warning-700' : v$.form.penghasilanSetelah.$error}" 
                    for="penghasilan_setelah">
                    Penghasilan setelah pandemi
                    </label>
                    <input 
                    v-model="form.penghasilanSetelah" 
                    id="penghasilan_setelah" 
                    type="number" 
                    placeholder="Masukkan penghasilan setelah pandemi" 
                    class="form-input" 
                    :class="{'form-input-error' : v$.form.penghasilanSetelah.$error}">
                    <span 
                    class="text-warning-700 mt-2 block text-sm" 
                    v-if="v$.form.penghasilanSetelah.$error">
                        {{ v$.form.penghasilanSetelah.$errors[0].$message }}
                    </span>
                </div>

                <div>
                    <label 
                    class="text-grey-800 block" 
                    :class="{'text-warning-700' : v$.form.alasan.$error}">
                    Alasan membutuhkan bantuan
                    </label>
                    <label 
                    class="text-grey-700 text-sm mt-1 block">
                    Pilih Salah Satu
                    </label>
                    <span 
                    class="text-warning-700 text-sm mt-1 block" 
                    v-if="v$.form.alasan.$error">
                            {{ v$.form.alasan.$errors[0].$message }}
                        </span>
                    <div class="mt-2">
                        <div class="flex">
                            <input 
                            type="radio" 
                            v-model="form.alasan" 
                            value="Kehilangan pekerjaan"
                            class="flex h-[22px]" 
                            name="alasan" 
                            id="kehilangan_pekerjaan">
                            <label 
                            class="ml-1 text-grey-800" 
                            for="kehilangan_pekerjaan">
                            Kehilangan pekerjaan
                            </label>
                        </div>
                        <div class="flex">
                            <input 
                            type="radio" 
                            v-model="form.alasan" 
                            value="Kepala keluarga terdampak atau korban Covid" 
                            class="flex h-[22px] bg-white border border-grey-400 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" 
                            name="alasan" 
                            id="terdampak_covid">
                            <label 
                            class="ml-1 text-grey-800" 
                            for="terdampak_covid">
                            Kepala keluarga terdampak atau korban Covid
                            </label>
                        </div>
                        <div class="flex">
                            <input 
                            type="radio" 
                            v-model="form.alasan" 
                            value="Tergolong fakir/miskin semenjak sebelum Covid" 
                            class="flex h-[22px] bg-white border border-grey-400 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" 
                            name="alasan" 
                            id="tergolong_fakir">
                            <label 
                            class="ml-1 text-grey-800" 
                            for="tergolong_fakir">
                            Tergolong fakir/miskin semenjak sebelum Covid
                            </label>
                        </div>
                        <div class="flex flex-wrap">
                            <input 
                            type="radio" 
                            v-model="lainnya" 
                            :value="true" 
                            class="flex h-[22px] bg-white border border-grey-400 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" 
                            name="alasan" 
                            id="lainnya">
                            <label 
                            class="ml-1 text-grey-800" 
                            for="lainnya">
                            Lainnya
                            </label>
                            <input 
                            type="text" 
                            v-model="form.alasan" 
                            v-if="lainnya == true" 
                            class="form-input" 
                            placeholder="Isi untuk alasan lainnya">
                        </div>

                        <div class="flex items-start mt-6">
                            <input 
                            type="checkbox" 
                            v-model="checked"
                            class="flex items-center px-4 py-2 h-[22px] text-grey-800 bg-white border border-grey-400 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring">
                            <label 
                            class="ml-1 text-grey-800">
                            Saya menyatakan bahwa data yang diisikan adalah benar dan siap mempertanggungjawabkan apabila ditemukan ketidaksesuaian dalam data tersebut
                            <span 
                            class="text-warning-700 mt-1 block text-sm" 
                            v-if="v$.checked.$error">
                                {{ v$.checked.$errors[0].$message }}
                            </span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex justify-end mt-6">
                <button type="submit" class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-primary-600 rounded-md hover:bg-primary-500 focus:outline-none focus:bg-primary-500">Kirim</button>
            </div>
        </form>
    </section>
</template>