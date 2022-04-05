<script>
export default {
    data: () => ({
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
            lainnya: false
        }
    }),
    methods: {
        onChange(e) {
            this.form.fotoKtp = this.$refs.ktp.files[0]
            this.form.fotoKk = this.$refs.kk.files[0]
    },
        submitForm() {
            
            console.info(this.form)
        }
    }
}
</script>

<template>
    <section class="max-w-4xl p-6 my-8 mx-auto bg-white rounded-md shadow-md">
        <h2 class="text-lg font-semibold text-gray-700 capitalize">Isi Formulir</h2>
        
        <form @submit.prevent="submitForm">
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                    <label class="text-gray-700" for="nama_lengkap">Nama Lengkap</label>
                    <input v-model="form.nama" id="nama_lengkap" type="text" class="form-input">
                </div>

                <div>
                    <label class="text-gray-700" for="nik">NIK</label>
                    <input v-model="form.nik" id="nik" type="number" class="form-input">
                </div>

                <div>
                    <label class="text-gray-700" for="kartu_keluarga">No. Kartu Keluarga</label>
                    <input v-model="form.noKk" id="kartu_keluarga" type="number" class="form-input">
                </div>

                <div>
                    <label class="text-gray-700" for="foto_ktp">Foto KTP</label>
                    <input id="foto_ktp" type="file" ref="ktp" accept=".jpg, .jpeg, .png, .bmp" @change="onChange" class="form-input">
                </div>

                <div>
                    <label class="text-gray-700" for="foto_kk">Foto Kartu Keluarga</label>
                    <input id="foto_kk" type="file" ref="kk" accept=".jpg, .jpeg, .png, .bmp" @change="onChange" class="form-input">
                </div>

                <div>
                    <label class="text-gray-700" for="umur">Umur</label>
                    <input v-model="form.umur" id="umur" type="number" class="form-input">
                </div>

                <div>
                    <label class="text-gray-700 block">Jenis Kelamin</label>
                    <div class="mt-2">
                        <input type="radio" name="jenis_kelamin" id="laki-laki" value="Laki-Laki" v-model="form.jenisKelamin" class="bg-white border border-gray-400 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring">
                        <label class="ml-1 text-gray-700" for="laki-laki">Laki-Laki</label>
                        <input type="radio" name="jenis_kelamin" id="perempuan" value="Perempuan" v-model="form.jenisKelamin" class="ml-4 bg-white border border-gray-400 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring">
                        <label class="ml-1 text-gray-700" for="perempuan">Perempuan</label>
                    </div>
                </div>

                <div>
                    <label class="text-gray-700">Alamat</label>
                    <textarea v-model="form.alamat" class="block h-48 w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-400 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"></textarea>
                </div>

                <div>
                    <label class="text-gray-700" for="rt">RT</label>
                    <input v-model="form.rt" id="rt" type="text" class="form-input">
                </div>

                <div>
                    <label class="text-gray-700" for="rw">RW</label>
                    <input v-model="form.rw" id="rw" type="text" class="form-input">
                </div>

                <div>
                    <label class="text-gray-700" for="umur">Penghasilan sebelum pandemi</label>
                    <input v-model="form.penghasilanSebelum" id="umur" type="number" class="form-input">
                </div>

                <div>
                    <label class="text-gray-700" for="umur">Penghasilan setelah pandemi</label>
                    <input v-model="form.penghasilanSetelah" id="umur" type="number" class="form-input">
                </div>

                <div>
                    <label class="text-gray-700">Alasan membutuhkan bantuan</label>
                    <div class="mt-2">
                        <div>
                            <input type="radio" v-model="form.alasan" value="Kehilangan pekerjaan" name="alasan" id="kehilangan_pekerjaan">
                            <label class="ml-1 text-gray-700" for="kehilangan_pekerjaan">Kehilangan pekerjaan</label>
                        </div>
                        <div>
                            <input type="radio" v-model="form.alasan" value="Kepala keluarga terdampak atau korban Covid" class="bg-white border border-gray-400 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" name="alasan" id="terdampak_covid">
                            <label class="ml-1 text-gray-700" for="terdampak_covid">Kepala keluarga terdampak atau korban Covid</label>
                        </div>
                        <div>
                            <input type="radio" v-model="form.alasan" value="Tergolong fakir/miskin semenjak sebelum Covid" class="bg-white border border-gray-400 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" name="alasan" id="tergolong_fakir">
                            <label class="ml-1 text-gray-700" for="tergolong_fakir">Tergolong fakir/miskin semenjak sebelum Covid</label>
                        </div>
                        <div>
                            <input type="radio" v-model="form.lainnya" :value="true" class="bg-white border border-gray-400 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" name="alasan" id="lainnya">
                            <label class="ml-1 text-gray-700" for="lainnya">Lainnya</label>
                            <input type="text" v-model="form.alasan" v-if="form.lainnya == true" class="form-input" placeholder="Isi untuk alasan lainnya">
                        </div>

                        <div class="flex items-start mt-6">
                            <input type="checkbox" class="flex items-center px-4 py-2 h-6 text-gray-700 bg-white border border-gray-400 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring">
                            <label class="ml-1 text-gray-700">Saya menyatakan bahwa data yang diisikan adalah benar dan siap mempertanggungjawabkan apabila ditemukan ketidaksesuaian dalam data tersebut</label>
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