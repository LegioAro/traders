function isMoveHeaderElem() {
  const title = document.querySelector('.header__desc-title.left');
  const text = document.querySelector('.header__desc-text-block.move');
  const blocks = document.querySelectorAll('.header__desc-item');

  if (title && text && blocks.length > 0 && window.innerWidth > 768) {
    blocks[0].append(text);
    blocks[1].append(title);
  } else if (title && text && blocks.length > 0 && window.innerWidth <= 768) {
    blocks[0].append(title);
    blocks[1].append(text);
  }
}

function isMoveElem(element, descBlock, mobBlock, widthWindow) {
  const elem = document.querySelector(element);
  const desc = document.querySelector(descBlock);
  const mob = document.querySelector(mobBlock);

  if (elem && desc && mob && window.innerWidth > widthWindow) {
    desc.append(elem);
  } else if (elem && desc && mob && window.innerWidth <= widthWindow) {
    mob.append(elem);
  }
}

isMoveElem(
  '.reasons .btn__wrapper',
  '.reasons .reasons__items-3',
  '.reasons .reasons__img-wrapper',
  1050,
);
isMoveElem('.reasons__btns', '.move-desc-2', '.move-mob-2', 1050);
isMoveHeaderElem();

window.addEventListener('resize', function () {
  isMoveHeaderElem();
  isMoveElem(
    '.reasons .btn__wrapper',
    '.reasons .reasons__items-3',
    '.reasons .reasons__img-wrapper',
    1050,
  );
  isMoveElem('.reasons__btns', '.move-desc-2', '.move-mob-2', 1050);
});
