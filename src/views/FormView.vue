<script>
export default {
    data: () => ({

    })
}
</script>

<template>
    
    <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md">
        <h2 class="text-lg font-semibold text-gray-700 capitalize">Isi Formulir</h2>
        
        <form>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                    <label class="text-gray-700" for="nama_lengkap">Nama Lengkap</label>
                    <input id="nama_lengkap" type="text" class="form-input">
                </div>

                <div>
                    <label class="text-gray-700" for="nik">NIK</label>
                    <input id="nik" type="number" class="form-input">
                </div>

                <div>
                    <label class="text-gray-700" for="kartu_keluarga">No. Kartu Keluarga</label>
                    <input id="kartu_keluarga" type="number" class="form-input">
                </div>

                <div>
                    <label class="text-gray-700" for="foto_ktp">Foto KTP</label>
                    <input id="foto_ktp" type="file" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-400 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring">
                </div>

                <div>
                    <label class="text-gray-700" for="foto_kk">Foto Kartu Keluarga</label>
                    <input id="foto_kk" type="file" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-400 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring">
                </div>

                <div>
                    <label class="text-gray-700" for="umur">Umur</label>
                    <input id="umur" type="number" class="form-input">
                </div>

                <div>
                    <label class="text-gray-700 block">Jenis Kelamin</label>
                    <div class="mt-2">
                        <input type="radio" name="jenis_kelamin" id="laki-laki" class="bg-white border border-gray-400 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring">
                        <label class="ml-1 text-gray-700" for="laki-laki">Laki-Laki</label>
                        <input type="radio" class="ml-4 bg-white border border-gray-400 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" name="jenis_kelamin" id="perempuan">
                        <label class="ml-1 text-gray-700" for="perempuan">Perempuan</label>
                    </div>
                </div>

                <div>
                    <label class="text-gray-700">Alamat</label>
                    <textarea class="block h-48 w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-400 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"></textarea>
                </div>

                <div>
                    <label class="text-gray-700" for="rt">RT</label>
                    <input id="rt" type="text" class="form-input">
                </div>

                <div>
                    <label class="text-gray-700" for="rw">RW</label>
                    <input id="rw" type="text" class="form-input">
                </div>

                <div>
                    <label class="text-gray-700" for="umur">Penghasilan sebelum pandemi</label>
                    <input id="umur" type="number" class="form-input">
                </div>

                <div>
                    <label class="text-gray-700" for="umur">Penghasilan setelah pandemi</label>
                    <input id="umur" type="number" class="form-input">
                </div>

                <div>
                    <label class="text-gray-700">Alasan membutuhkan bantuan</label>
                    <div class="mt-2">
                        <div>
                            <input type="radio" name="alasan" id="kehilangan_pekerjaan">
                            <label class="ml-1 text-gray-700" for="kehilangan_pekerjaan">Kehilangan pekerjaan</label>
                        </div>
                        <div>
                            <input type="radio" class="bg-white border border-gray-400 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" name="alasan" id="terdampak_covid">
                            <label class="ml-1 text-gray-700" for="terdampak_covid">Kepala keluarga terdampak atau korban Covid</label>
                        </div>
                        <div>
                            <input type="radio" class="bg-white border border-gray-400 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" name="alasan" id="tergolong_fakir">
                            <label class="ml-1 text-gray-700" for="tergolong_fakir">Tergolong fakir/miskin semenjak sebelum Covid</label>
                        </div>
                        <div>
                            <input type="radio" class="bg-white border border-gray-400 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" name="alasan" id="lainnya">
                            <label class="ml-1 text-gray-700" for="lainnya">Lainnya</label>
                            <input type="text" class="form-input" placeholder="Isi untuk alasan lainnya">
                        </div>
                        <div class="flex items-start mt-6">
                            <input type="checkbox" class="flex items-center px-4 py-2 h-6 text-gray-700 bg-white border border-gray-400 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring">
                            <label class="ml-1 text-gray-700">Saya menyatakan bahwa data yang diisikan adalah benar dan siap mempertanggungjawabkan apabila ditemukan ketidaksesuaian dalam data tersebut</label>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex justify-end mt-6">
                <button class="px-6 py-2 leading-5 text-white transition-colors duration-400 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
            </div>
        </form>
    </section>
</template>