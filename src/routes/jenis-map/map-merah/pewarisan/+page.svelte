<script>
  import Button from "$lib/components/button/Button.svelte";

  let znt = '0';
  let luas = '0';
</script>

<section class="info">
  <h1 class="title"><i class="bx bxs-square-rounded text-red-500"></i> Pewarisan</h1>
  <div>Istilah dalam KKP: <b>Peralihan Hak - Pewarisan</b></div>
</section>
<section class="action">
  <Button label="Lampiran 13" icon="bx bx-printer" type="primary" size="xs" />
  <Button label="Lembar Info" icon="bx bx-printer" type="success" size="xs" />
</section>
<div class="two-column">
  <div class="section-l">
    <section class="doc-requirements">
      <h3>Dokumen yang diperlukan</h3>
      <div>
        <ul>
          <li><i class="bx bx-file"></i> Lembar Permohonan / Lampiran 13</li>
          <li><i class="bx bx-file"></i> Sertifikat Asli</li>
          <li><i class="bx bx-file"></i> Fotocopy KTP Ahli Waris (Legalisir)</li>
          <li><i class="bx bx-file"></i> Fotocopy KK Ahli Waris (Legalisir)</li>
          <li><i class="bx bx-file"></i> Surat Kematian dari Desa</li>
          <li><i class="bx bx-file"></i> Blangko Surat Keterangan Warisan</li>
          <li><i class="bx bx-file"></i> Zona Nilai Tanah</li>
          <li><i class="bx bx-file"></i> PPB Tahun Terbaru</li>
          <li><i class="bx bx-file"></i> Surat Pernyataan BPHTB</li>
          <li><i class="bx bx-file"></i> Lembar Validasi BPHTB</li>
          <li><i class="bx bx-file"></i> Fotocopy Saksi-Saksi (Legalisir)</li>
          <li><i class="bx bx-file"></i> Surat Kuasa (Jika Dikuasakan)</li>
        </ul>
      </div>
    </section>
  </div>
  <div class="section-r">
    <section class="cost">
      <h3>Biaya</h3>
      <div class="cost-detail">
        <div class="cost-formula">
          Rumus Biaya : ((Luas x ZNT) / 1000) + 50000
        </div>
        <div class="flex flex-row">
          <div class="form-group w-1/2">
            <label for="nilai-zona">Nilai Zona:</label>
            <input id="nilai-zona" type="number" bind:value={znt} placeholder="Masukkan Nilai Zona" />
          </div>
          <div class="form-group w-1/2">
            <label for="luas-tanah">Luas Tanah:</label>
            <input id="luas-tanah" type="number" bind:value={luas} placeholder="Masukkan Luas Tanah" />
          </div>
        </div>
        <div class="cost-total">
          {#if (znt && luas)}
            Total Biaya: Rp.{ (((parseInt(znt) * parseInt(luas)) / 1000) + 50000).toLocaleString() }.00
          {:else}
            Total Biaya: Rp.0.00
          {/if}
        </div>
      </div>
    </section>
    <section class="duration">
      <h3>Pengerjaan</h3>
      <div class="duration-detail">
        5 Hari atau Seminggu
      </div>
    </section>
  </div>
</div>
