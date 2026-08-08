const screenContainer = document.getElementById("screen_container");

const emulator = new V86({
	wasm_path: "v86/v86.wasm",

	memory_size: 32 * 1024 * 1024,
	vga_memory_size: 256 * 1024 * 1024,

	screen_container: screenContainer,

	bios: {
		url: "bios/seabios.bin"
	},

	vga_bios: {
		url: "bios/vgabios.bin"
	},

	cdrom: {
		url: "SectorZero.iso"
	},

	autostart: true
});

function toggleFullScreen() {
	const container = document.getElementById("gameContainer");

	if (!document.fullscreenElement) {
		container.requestFullscreen();
	} else {
		document.exitFullscreen();
	}
}