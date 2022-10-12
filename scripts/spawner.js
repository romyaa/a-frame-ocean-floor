const spawnCountdown = 50;

AFRAME.registerComponent('spawner', {
  
    init: function () {
      this.count = 0;
    },

    getWorldPosition: function () {
      var mesh = this.el.object3D;
      mesh.updateMatrixWorld();
  
      var pos = new THREE.Vector3();
      var rot = new THREE.Quaternion();
      var scale = new THREE.Vector3();
  
      mesh.matrixWorld.decompose(pos, rot, scale);
      return pos;
    },

    tick: function () {
      if (this.count > spawnCountdown) {
        this.count = 0;
			  const el = document.createElement('a-sphere');
        el.setAttribute('position', this.getWorldPosition());
        el.setAttribute('scale', new THREE.Vector3(0.15, 0.15, 0.15));
        el.setAttribute('color', 'red');
        document.querySelector('a-scene').appendChild(el);
      }
      this.count++;
    },
});